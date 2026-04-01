import type { Hash } from "viem";

type OnchainProfilePanelProps = {
  nickname: string;
  bio: string;
  isLoading: boolean;
  isFetching: boolean;
  txHash?: Hash;
  onRefresh: () => void;
};

export function OnchainProfilePanel({
  nickname,
  bio,
  isLoading,
  isFetching,
  txHash,
  onRefresh,
}: OnchainProfilePanelProps) {
  const hasProfile = Boolean(nickname || bio);

  return (
    <section className="panel-block">
      <div className="panel-head">
        <h2 className="section-title">Current Onchain Profile</h2>
        <button type="button" className="ghost-button" onClick={onRefresh}>
          {isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {isLoading ? (
        <p className="panel-value">Loading profile from Base...</p>
      ) : hasProfile ? (
        <>
          <p className="panel-label">Nickname</p>
          <p className="panel-value">{nickname}</p>
          <p className="panel-label">Bio</p>
          <p className="panel-value">{bio}</p>
        </>
      ) : (
        <p className="panel-value">No profile set onchain for this wallet yet.</p>
      )}

      {txHash ? (
        <a
          href={`https://basescan.org/tx/${txHash}`}
          target="_blank"
          rel="noreferrer"
          className="tx-link"
        >
          View Tx: {txHash}
        </a>
      ) : null}
    </section>
  );
}
