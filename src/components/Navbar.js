'use client';

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center bg-[#010101] mt-4">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="flex max-w-[1110px] justify-center md:justify-between w-full lg:mt-9">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="w-[105.38px] h-[44.98px] md:w-[173.12px] md:h-[74px]"
                  src="/fametonic_logo.svg"
                  alt="Fametonic Logo"
                  width={173}
                  height={74}
                  priority
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-start space-x-8">
              <a href="#" className="text-[#A9A9A9] px-3 text-sm font-medium">
                About us
              </a>
              <a href="#" className="text-[#A9A9A9] px-3 text-sm font-medium">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center absolute right-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#FFFFFF] focus:outline-non p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2">
              <a
                href="#"
                className="block text-[#A9A9A9] px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                About us
              </a>
              <a
                href="#"
                className="block text-[#A9A9A9] px-3 py-2 rounded-md text-base font-medium "
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
