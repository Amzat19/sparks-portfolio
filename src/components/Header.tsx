"use client";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#222222] text-[#E0E0E0] flex justify-between items-center p-4 h-11 sm:h-20 font-montserrat">
      <h1 className="font-black sm:text-3xl text-xl">DJ MSPARKS</h1>

      {/* Mobile */}
      <div
        className="sm:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex gap-4 items-center">
        <span className="font-medium text-base">Bio</span>
        <span className="font-medium text-base">Listen</span>
        <span className="font-medium text-base">Events</span>
        <span className="font-medium text-base">Equipments</span>
        <span className="font-medium text-base">Contact</span>
      </div>
    </header>
  );
};

export default Header;
