import Hero from "@/components/Hero";
import Bento from "@/components/ui/bento";

export default function Home() {
  return (
    <>
      <div className="mx-auto px-4">
        <Hero />
        <div className="bg-white">
          <Bento />
        </div>
      </div>
    </>
  );
}
