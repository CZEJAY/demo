import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="max-content grid grid-cols-6 gap-4">
        <div>
          <Logo />
        </div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </footer>
  );
}
