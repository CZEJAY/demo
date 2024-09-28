import { SlGlobe } from "react-icons/sl";

export function Header() {
  return (
    <header className="md:fixed md:top-0 md:left-0 md:right-0 p-4 bg-white border-b border-b-red-charcoal">
      <div className="max-content flex justify-between items-center">
        <span className="text-2xl font-bold text-black">Atoovis Create</span>

        <div className="">
          <SlGlobe />
        </div>
      </div>
    </header>
  );
}
