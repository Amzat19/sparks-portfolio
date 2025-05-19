"use client";
import { useState } from "react";
import { X } from "lucide-react";

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

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-black bg-opacity-80 flex">
          <aside className="w-[80%] max-w-xs bg-[#222222] text-white p-6 h-full flex flex-col justify-between">
            <div>
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col gap-4 text-lg font-medium">
                <span onClick={() => setMenuOpen(false)}>Bio</span>
                <span onClick={() => setMenuOpen(false)}>Listen</span>
                <span onClick={() => setMenuOpen(false)}>Events</span>
                <span onClick={() => setMenuOpen(false)}>Equipments</span>
                <span onClick={() => setMenuOpen(false)}>Contact</span>
              </nav>
            </div>
            <p className="text-xs text-gray-400">© DJ MSPARKS</p>
          </aside>

          {/* Click-outside area (optional) */}
          <div className="flex-1" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}
    </header>
  );
};

export default Header;
