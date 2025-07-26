import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-figtree items-center justify-items-center min-h-screen pb-20 gap-16">
      <header className="flex flex-col w-full">
        <Topbar />
        <Navbar />
      </header>
      <MainContent />
    </div>
  );
}
