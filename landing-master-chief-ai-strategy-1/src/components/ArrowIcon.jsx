export default function ArrowIcon({ className = 'arrowbadge sm' }) {
  return (
    <svg className={className} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="20" fill="#FFC630" />
      <path
        d="M14.5 25.5 L25.5 14.5 M16.5 14.5 H25.5 V23.5"
        stroke="#141414"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
