export function Logo({ isScrolled }: { isScrolled?: boolean }) {
  return (
    <span
      className={`
    font-medium text-3xl tracking-tighter ${
      isScrolled ? "text-black" : "text-white"
    }
    `}
    >
      Patexa
    </span>
  );
}
