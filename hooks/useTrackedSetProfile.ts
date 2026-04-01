"use client";

import { useCallback } from "react";
import { type Address, type Hash } from "viem";
import { useWriteContract } from "wagmi";
import { Attribution } from "ox/erc8021";
import {
  APP_ID,
  BUILDER_CODE_PLACEHOLDER,
  CHAINPROFILE_APP_NAME,
  CHAINPROFILE_CONTRACT_ADDRESS,
  chainProfileAbi,
} from "@/lib/contracts";
import { trackTransaction } from "@/utils/track";

const DATA_SUFFIX = Attribution.toDataSuffix({
  // Replace BUILDER_CODE_PLACEHOLDER with your issued Builder Code.
  codes: [BUILDER_CODE_PLACEHOLDER],
});

type SetProfileInput = {
  nickname: string;
  bio: string;
  address?: Address;
};

export function useTrackedSetProfile() {
  const {
    writeContractAsync,
    isPending,
    error,
    reset,
    data: latestTxHash,
  } = useWriteContract();

  const setProfileTracked = useCallback(
    async ({ nickname, bio, address }: SetProfileInput): Promise<Hash> => {
      const txHash = await writeContractAsync({
        address: CHAINPROFILE_CONTRACT_ADDRESS,
        abi: chainProfileAbi,
        functionName: "setProfile",
        args: [nickname, bio],
        dataSuffix: DATA_SUFFIX,
      });

      await trackTransaction(APP_ID, CHAINPROFILE_APP_NAME, address, txHash);
      return txHash;
    },
    [writeContractAsync],
  );

  return {
    setProfileTracked,
    isPending,
    error,
    reset,
    latestTxHash,
  };
}
