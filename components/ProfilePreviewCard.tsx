import { StatusBadge } from "./StatusBadge";

type ProfilePreviewCardProps = {
  nickname: string;
  bio: string;
  address?: string;
  status: "ready" | "saving" | "saved" | "error" | "empty";
};

function shortAddress(address?: string) {
  if (!address) return "Not connected";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function ProfilePreviewCard({
  nickname,
  bio,
  address,
  status,
}: ProfilePreviewCardProps) {
  const safeNickname = nickname.trim() || "Unnamed Identity";
  const safeBio = bio.trim() || "Your onchain bio will appear here.";

  return (
    <section className="preview-column">
      <h2 className="section-title">Live Profile Card</h2>
      <article className="profile-card" aria-label="Live profile preview">
        <div className="card-row">
          <p className="card-eyebrow">CHAINPROFILE PASSPORT</p>
          <StatusBadge status={status} />
        </div>
        <h3 className="card-nickname">{safeNickname}</h3>
        <p className="card-bio">{safeBio}</p>

        <div className="card-meta">
          <div>
            <p className="meta-label">Wallet</p>
            <p className="meta-value">{shortAddress(address)}</p>
          </div>
          <div>
            <p className="meta-label">Identity Layer</p>
            <p className="meta-value">Base Mainnet</p>
          </div>
        </div>
      </article>
    </section>
  );
}
