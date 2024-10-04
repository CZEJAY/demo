import { RxHamburgerMenu } from "react-icons/rx";
// import { SlGlobe } from "react-icons/sl";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 lg:px-28 bg-white border-b border-b-red-charcoal">
      <div className="max-content flex items-center justify-between">
        <span className="text-black font-medium text-3xl tracking-tighter">
          Patexa
        </span>

        <div className="flex items-center space-x-8">
          {/* <div className="flex items-center space-x-2">
            <SlGlobe className="cursor-pointer" />
            <span className="max-md:hidden text-[16px] text-black">
              English
            </span>
          </div> */}
          <NavToggle />
        </div>
      </div>
    </header>
  );
}

function NavToggle() {
  return (
    <div className="">
      <RxHamburgerMenu className="size-8" />
    </div>
  );
}
