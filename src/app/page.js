'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans items-center justify-items-center min-h-screen pb-20 gap-16">
      <header className="flex flex-col w-full">
        {/* topbar */}
        <div className="flex flex-col items-center justify-center gap-4 topbar-bg w-full px-8 py-2.5">
          <h1 className="text-[22px] font-bold text-white text-center">🚀 <span className="text-[#00e7f9]">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!</h1>
        </div>
        {/* Navbar */}
        <nav className="flex flex-col items-center bg-[#010101]">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              {/* Logo */}

              <div className="flex max-w-[1110px] justify-between w-full lg:mt-9">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/fametonic_logo.svg"
                      alt="Fametonic Logo"
                      width={173.12}
                      height={74}
                      priority
                    />
                  </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-start space-x-8">
                  <a href="#" className="text-[#A9A9A9] hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Home
                  </a>
                  <a href="#" className="text-[#A9A9A9] hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    About
                  </a>
                  <a href="#" className="text-[#A9A9A9] hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Services
                  </a>
                  <a href="#" className="text-[#A9A9A9] hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Contact
                  </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[#A9A9A9] hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
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
                    className="block text-[#A9A9A9] hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block text-[#A9A9A9] hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block text-[#A9A9A9] hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="block text-[#A9A9A9] hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col w-full max-w-[1110px]">
        <div className="flex flex-col md:flex-row gap-8 px-4 py-8 relative">
          {/* Left Column */}
          <div className="flex-1 relative z-10 md:pr-0 order-2 md:order-1">
            <h1 className="text-[35px] font-bold text-white mb-4">
              Want to Turn Social Media Into a Profitable Career? 
            </h1>
            <h1 className="text-[35px] font-bold text-[#00E7F9] mb-4">
              Discover your way to success with Fametonic:
            </h1>
            <div className="mb-6">
              <ul className="text-white space-y-3">
                <li className="flex items-start">
                  ✨{'  '}
                  Start growing your influence right away—no waiting required!
                </li>
                <li className="flex items-start">
                  ✨{'  '}
                  Create viral TikToks and Reels step by step with easy-to-follow lessons
                </li>
                <li className="flex items-start">
                  ✨{'  '}
                  Use a Personal AI Worker to boost your content
                </li>
                <li className="flex items-start">
                  ✨{' '}
                  Learn from expert-led courses designed for aspiring influencers
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-0 w-[313px]">
              <button className="w-[313px] bg-[#FC004E] text-white px-6 py-3 rounded-md font-medium uppercase flex items-center justify-center gap-2">
                Get Started
                <Image
                  src="/greater_icon.svg"
                  alt="greater_icon"
                  width={11}
                  height={8}
                />
              </button>
              <p className="text-white mt-0 w-full text-center">1-minute quiz for personalized Insights</p>
            </div>

            <footer className="mt-[30px] flex-1 items-center justify-center text-[#ABABAB]">
              
              <div className="text-xs">
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
              </div>

              <div className="mt-3 text-[10px]">
                Fametonic 2025 ©All Rights Reserved.
              </div>
            </footer>
          </div>
          
          {/* Right Column */}
          <div className="flex-1 md:-ml-20 relative order-1 md:order-2">
            <Image
              src="/home_main_bg.png"
              alt="home_main_bg"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
