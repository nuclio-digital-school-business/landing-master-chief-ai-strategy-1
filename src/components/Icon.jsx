const ICONS = {
  people: (
    <>
      <circle cx="16" cy="16.5" r="3" stroke="#141414" strokeWidth="2.1" fill="none" />
      <circle cx="24.5" cy="16.5" r="3" stroke="#141414" strokeWidth="2.1" fill="none" />
      <path
        d="M10.5 27c.5-3.3 2.9-5.5 5.5-5.5s5 2.2 5.5 5.5M19 27c.5-3.3 2.9-5.5 5.5-5.5s5 2.2 5.5 5.5"
        stroke="#141414"
        strokeWidth="2.1"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  folder: (
    <path
      d="M11 16a1.5 1.5 0 0 1 1.5-1.5h5l2 2.2h8a1.5 1.5 0 0 1 1.5 1.5v7.3A1.5 1.5 0 0 1 27.5 27h-15A1.5 1.5 0 0 1 11 25.5Z"
      stroke="#141414"
      strokeWidth="2.1"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  rocket: (
    <>
      <path
        d="M20 12c3 1.5 5 4.8 5 8.5 0 2-.5 3.6-1.2 5H16.2c-.7-1.4-1.2-3-1.2-5 0-3.7 2-7 5-8.5Z"
        stroke="#141414"
        strokeWidth="2.2"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="19" r="1.8" stroke="#141414" strokeWidth="2" fill="none" />
      <path
        d="M16 25.5 14 29M24 25.5l2 3.5M17.5 25.5v3M22.5 25.5v3"
        stroke="#141414"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  quote: (
    <path
      d="M14 15h5v6.5c0 2.8-2.2 5-5 5v-2.2c1.5 0 2.7-1.2 2.7-2.7H14Zm9.3 0h5v6.5c0 2.8-2.2 5-5 5v-2.2c1.5 0 2.7-1.2 2.7-2.7h-2.7Z"
      fill="#141414"
    />
  ),
  check: (
    <path
      d="M13 20.5 17.5 25 27 14.5"
      stroke="#141414"
      strokeWidth="2.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Icon({ name, className = 'arrowbadge sm' }) {
  return (
    <svg className={className} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="20" fill="#FFC630" />
      {ICONS[name]}
    </svg>
  );
}