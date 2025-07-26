import Image from "next/image";
import Footer from "./Footer";

export default function MainContent() {
  return (
    <main className="flex flex-col w-full max-w-[1110px] md:px-2 lg:px-0">
      <div className="flex flex-col md:flex-row gap-8 relative">
        {/* Left Column */}
        <div className="flex-1 relative z-10 md:pr-0 order-2 py-8 md:order-1">
          <h1 className="text-[25px] md:text-[35px] font-bold text-white mb-0 urbanist-font text-center md:text-left">
            Want to Turn Social Media Into a Profitable Career? 
          </h1>
          <h1 className="text-[25px] md:text-[35px] font-bold text-[#00E7F9] mb-4 styled-heading urbanist-font text-center md:text-left">
            Discover your way to success <br /> with Fametonic:
          </h1>
          <div className="mb-6">
            <ul className="text-white space-y-3 font-semibold px-4 md:px-0">
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
          <div className="block md:hidden">
            <Footer/>
          </div>
          <div className="flex flex-col w-full px-4 md:w-[313px] items-center md:items-start">
            <button className="w-full md:w-[313px] bg-[#FC004E] text-white font-medium uppercase flex items-center justify-center get-started-button">
              <span>Get Started</span>
              <Image
                src="/greater_icon.svg"
                alt="greater_icon"
                width={11}
                height={8}
                className="mt-1.5 ml-2.5"
              />
            </button>
            <p className="text-white w-full text-center text-[12px] mt-1">1-minute quiz for personalized Insights</p>
          </div>
          <div className="hidden md:block">
            <Footer/>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="flex-1 md:-ml-56 relative order-1 md:order-2 md:-mt-10">
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
  );
}
