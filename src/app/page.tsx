import Hero from "@/components/Hero";
import Bento from "@/components/ui/bento";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";

export default function Home() {
  return (
    <>
      <div className="mx-auto px-4">
        <Hero />
        <div className="bg-black">
          <Bento />
        </div>
        <div className="bg-black">
          <div className="text-center mt-20">
            <h3 className="text-4xl font-semibold">Our Safes Protect</h3>
            <p className="text-xl mt-6">
              Protect against all types of threats, weather, and keep your
              family safe
            </p>
          </div>
          <StickyScrollRevealDemo />
        </div>
      </div>
    </>
  );
}
