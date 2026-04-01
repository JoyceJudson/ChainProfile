"use client";

import { base } from "wagmi/chains";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";

function shortenAddress(address?: string) {
  if (!address) return "Not connected";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function WalletSection() {
  const { address, isConnected, chainId } = useAccount();
  const { connectors, connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitchingChain } = useSwitchChain();

  if (!isConnected) {
    return (
      <div className="wallet-actions">
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            type="button"
            className="ghost-button"
            onClick={() => connect({ connector, chainId: base.id })}
            disabled={isPending}
          >
            {isPending ? "Connecting..." : `Connect ${connector.name}`}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="wallet-actions">
      <p className="wallet-pill">{shortenAddress(address)}</p>
      {chainId !== base.id ? (
        <button
          type="button"
          className="ghost-button"
          onClick={() => switchChain({ chainId: base.id })}
          disabled={isSwitchingChain}
        >
          {isSwitchingChain ? "Switching..." : "Switch To Base"}
        </button>
      ) : (
        <p className="wallet-pill">Base Ready</p>
      )}
      <button type="button" className="ghost-button" onClick={() => disconnect()}>
        Disconnect
      </button>
    </div>
  );
}
