import Hero from "@/components/Hero";
import Bento from "@/components/ui/bento";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import AboutUs from "@/components/ui/AboutUs";

export default function Home() {
  return (
    <>
      <div className="mx-auto px-4 w-full max-w-none">
        {/* Hero section below */}
        <div>
          <Hero />
        </div>
        {/* Bento Grid for bestseller products below */}
        <div className="bg-black">
          <Bento />
        </div>
        {/* Section 3 safes benefits */}
        <div className="bg-black w-full">
          <div className="text-center mt-20">
            <h3 className="text-4xl font-semibold">Our Safes Protect</h3>
            <p className="text-xl mt-6">
              Protect against all types of threats, weather, and keep your
              family safe
            </p>
          </div>
          <div className="mt-20 w-fit">
            <StickyScrollRevealDemo />
          </div>
        </div>
        {/* Section 4 About US  */}
        <div className="bg-black w-full">
          <div className="text-center mt-20">
            <h3 className="text-4xl font-semibold">About Us</h3>
          </div>
          {/* Component here in the div below*/}
          <div className="w-fit">
            <AboutUs />
          </div>
        </div>
        {/* Section 5 Products */}
        <div className="bg-black">
          <div className="text-center mt-20">
            <h3 className="text-4xl font-semibold">Browse Our Safes</h3>
            <p className="text-xl mt-6">American Security & Cannon Safes</p>
          </div>
          {/* Component here */}
          <div>
            {/* <Component /> */}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
