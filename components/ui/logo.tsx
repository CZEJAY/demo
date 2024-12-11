export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill="#7C3AED" />
        <path
          d="M9 8h14a1 1 0 011 1v5a8 8 0 01-8 8h-7a1 1 0 01-1-1V9a1 1 0 011-1z"
          fill="white"
        />
        <path d="M9 22h7a1 1 0 110 2H9a1 1 0 110-2z" fill="white" />
      </svg>
    </div>
  );
}
