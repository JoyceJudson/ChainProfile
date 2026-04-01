"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { base } from "wagmi/chains";
import { waitForTransactionReceipt } from "wagmi/actions";
import { useAccount } from "wagmi";
import type { Hash } from "viem";
import { OnchainProfilePanel } from "@/components/OnchainProfilePanel";
import { ProfileEditor } from "@/components/ProfileEditor";
import { ProfilePreviewCard } from "@/components/ProfilePreviewCard";
import { WalletSection } from "@/components/WalletSection";
import { useProfile } from "@/hooks/useProfile";
import { useTrackedSetProfile } from "@/hooks/useTrackedSetProfile";
import { wagmiConfig } from "@/lib/wagmi";

type SaveState = "idle" | "saving" | "saved" | "error";

export default function Home() {
  const { address, isConnected, chainId } = useAccount();
  const { nickname: onchainNickname, bio: onchainBio, isLoading, isFetching, refetch } =
    useProfile(address);
  const { setProfileTracked, isPending } = useTrackedSetProfile();

  const [nickname, setNickname] = useState("");
  const [bio, setBio] = useState("");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [saveError, setSaveError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<Hash | undefined>(undefined);

  const hasHydratedFromOnchain = useRef(false);

  useEffect(() => {
    if (!isConnected) {
      hasHydratedFromOnchain.current = false;
      return;
    }

    if (!isLoading && !hasHydratedFromOnchain.current) {
      setNickname(onchainNickname);
      setBio(onchainBio);
      hasHydratedFromOnchain.current = true;
    }
  }, [isConnected, isLoading, onchainNickname, onchainBio]);

  const isBaseNetwork = chainId === base.id;
  const nicknameValid = nickname.length <= 30;
  const bioValid = bio.length <= 200;
  const canSave =
    Boolean(address) && isConnected && isBaseNetwork && nicknameValid && bioValid && !isPending;

  const status =
    saveState === "saving"
      ? "saving"
      : saveState === "saved"
        ? "saved"
        : saveState === "error"
          ? "error"
          : onchainNickname || onchainBio
            ? "ready"
            : "empty";

  async function handleSave() {
    if (!canSave || !address) return;

    setSaveState("saving");
    setSaveError(null);

    try {
      const hash = await setProfileTracked({
        nickname: nickname.trim(),
        bio: bio.trim(),
        address,
      });

      setTxHash(hash);
      await waitForTransactionReceipt(wagmiConfig, { hash });
      await refetch();
      setSaveState("saved");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Transaction failed. Please try again.";
      setSaveError(message);
      setSaveState("error");
    }
  }

  return (
    <div className="studio-background">
      <div className="studio-shell">
        <header className="studio-header">
          <div>
            <p className="identity-chip">Onchain Identity Badge</p>
            <h1 className="main-title">ChainProfile</h1>
            <p className="main-subtitle">Profile Card Builder for Base Mini App</p>
          </div>
          <WalletSection />
        </header>

        <main className="studio-grid">
          <ProfilePreviewCard
            nickname={nickname}
            bio={bio}
            address={address}
            status={status}
          />

          <section className="editor-column">
            <ProfileEditor
              nickname={nickname}
              bio={bio}
              onNicknameChange={setNickname}
              onBioChange={setBio}
            />

            <section className="action-block">
              <button
                type="button"
                className="primary-action"
                disabled={!canSave}
                onClick={handleSave}
              >
                {isPending || saveState === "saving" ? "Saving Profile..." : "Save Profile"}
              </button>

              {!isConnected ? (
                <p className="hint-text">Connect wallet to write nickname + bio onchain.</p>
              ) : null}
              {isConnected && !isBaseNetwork ? (
                <p className="hint-text">Switch to Base network before saving.</p>
              ) : null}
              {saveError ? <p className="error-text">{saveError}</p> : null}
            </section>

            <OnchainProfilePanel
              nickname={onchainNickname}
              bio={onchainBio}
              isLoading={isLoading}
              isFetching={isFetching}
              txHash={txHash}
              onRefresh={() => {
                void refetch();
              }}
            />
          </section>
        </main>

        <footer className="studio-footer">
          <p>Only nickname + bio are supported by current contract capabilities.</p>
          <Link href="/about">About ChainProfile Capability Scope</Link>
        </footer>
      </div>
    </div>
  );
}
