import { Logo } from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 max-md:px-4 lg:px-14 xl:px-28 bg-white z-10 text-black border-b border-b-red-charcoal">
      <div className="max-content flex items-center justify-between ">
        <Logo />

        <div className="flex items-center space-x-8">
          <NavToggle />
        </div>
      </div>
    </header>
  );
}

function NavToggle() {
  return (
    <div>
      <RxHamburgerMenu className="size-8" />
    </div>
  );
}
