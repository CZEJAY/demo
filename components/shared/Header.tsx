"use client";
import { navLinks } from "@/lib/data";
import { Logo } from "./Logo";
// import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";
// import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";

export function Header() {
  const [open, setOpen] = useState(false);
  // useLockBodyScroll(open);
  return (
    <header className="fixed top-0 left-0 right-0 py-4 max-lg:px-4 lg:px-14 xl:px-28 bg-white shadow-md z-10 text-black border-b border-b-red-charcoal">
      <div className="max-content flex items-center justify-between">
        <Logo />

        <div className="flex items-center space-x-8 md:hidden">
          <NavToggle open={open} setOpen={setOpen} />
        </div>

        <div className="max-md:hidden">
          <NavLinks />
        </div>
      </div>

      <SideBar open={open} />
    </header>
  );
}

function NavLinks() {
  return (
    <ul className="flex max-md:flex-col max-md:space-y-5 md:items-center md:space-x-5">
      {navLinks.map((item, idx) => (
        <li key={idx} className="hover:text-deepTeal hover-effects">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function NavToggle({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="size-10 relative focus:outline-none bg-silverGray/20 rounded-md"
      onClick={() => setOpen(!open)}
    >
      <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
            open && "opacity-0"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </div>
  );
}

function SideBar({ open }: { open: boolean }) {
  return (
    <div
      className={`hover-effects fixed top-16 left-0 right-0 bg-white h-screen py-5 px-4 md:hidden transform transition-transform duration-500 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <NavLinks />
    </div>
  );
}
