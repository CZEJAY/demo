import { RxHamburgerMenu } from "react-icons/rx";
import { SlGlobe } from "react-icons/sl";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 bg-white border-b border-b-red-charcoal">
      <div className="max-content flex justify-between items-center">
        <span className="text-2xl font-bold text-black">Patexa</span>

        <div className="flex items-center space-x-8">
          <SlGlobe className="cursor-pointer" />
          <NavToggle />
        </div>
      </div>
    </header>
  );
}

function NavToggle() {
  return (
    <div>
      <RxHamburgerMenu className="size-5" />
    </div>
  );
}
