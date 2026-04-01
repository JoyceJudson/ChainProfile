import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-background">
      <article className="about-shell">
        <p className="identity-chip">ChainProfile Scope</p>
        <h1 className="main-title">What This Mini App Can Verify</h1>
        <p className="about-copy">
          ChainProfile currently writes and reads only two fields from onchain contract state:
          nickname and bio. It does not include follow graphs, comments, advanced social proof,
          or multi-layer identity attestations.
        </p>
        <p className="about-copy">
          This constraint is intentional to keep the Profile Card fully truthful to the current
          contract capabilities.
        </p>
        <Link className="ghost-button about-link" href="/">
          Back To Identity Studio
        </Link>
      </article>
    </div>
  );
}
