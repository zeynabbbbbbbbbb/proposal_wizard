const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function ClientIcon(props) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <rect x="20" y="24" width="80" height="72" rx="12" {...strokeProps} />
      <circle cx="46" cy="54" r="12" {...strokeProps} />
      <path d="M28 84c4-14 14-20 18-20s14 6 18 20" {...strokeProps} />
      <path d="M70 50h18M70 62h14" {...strokeProps} />
    </svg>
  );
}

export function ScopeIcon(props) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <path d="M32 18h40l16 16v66a4 4 0 01-4 4H32a4 4 0 01-4-4V22a4 4 0 014-4z" {...strokeProps} />
      <path d="M72 18v16h16" {...strokeProps} />
      <path d="M40 56h40M40 70h40M40 84h26" {...strokeProps} />
    </svg>
  );
}

export function TimelineIcon(props) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <rect x="18" y="26" width="84" height="72" rx="10" {...strokeProps} />
      <path d="M18 46h84" {...strokeProps} />
      <path d="M38 16v20M82 16v20" {...strokeProps} />
      <circle cx="42" cy="66" r="5" fill="currentColor" stroke="none" />
      <circle cx="60" cy="66" r="5" fill="currentColor" stroke="none" />
      <circle cx="78" cy="66" r="5" fill="currentColor" stroke="none" />
      <circle cx="42" cy="82" r="5" fill="currentColor" stroke="none" />
      <circle cx="60" cy="82" r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function RequirementsIcon(props) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <rect x="26" y="16" width="68" height="88" rx="10" {...strokeProps} />
      <path d="M40 38l8 8 14-16" {...strokeProps} />
      <path d="M66 42h18" {...strokeProps} />
      <path d="M40 66l8 8 14-16" {...strokeProps} />
      <path d="M66 70h18" {...strokeProps} />
      <path d="M40 92h44" {...strokeProps} />
    </svg>
  );
}

export function ReviewIcon(props) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <path d="M18 62L100 22 78 100 58 70 18 62z" {...strokeProps} />
      <path d="M100 22L58 70" {...strokeProps} />
    </svg>
  );
}
