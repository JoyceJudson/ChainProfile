type StatusBadgeProps = {
  status: "ready" | "saving" | "saved" | "error" | "empty";
};

const LABEL_MAP: Record<StatusBadgeProps["status"], string> = {
  ready: "Profile Synced",
  saving: "Pending Signature",
  saved: "Onchain Confirmed",
  error: "Sync Error",
  empty: "No Onchain Data",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-${status}`} aria-live="polite">
      <span className="status-dot" />
      {LABEL_MAP[status]}
    </span>
  );
}
