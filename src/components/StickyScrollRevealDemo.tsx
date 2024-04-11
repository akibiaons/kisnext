"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Protect Against Burglury",
    description:
      "Make it harder for unwanted guests to take away your valuables, buy some time to get your bedside gun ready or call the police you pussy...",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1712704073/425001492_700761325547751_4300758964046175136_n_kzzojs.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Keep Children & Family Safe",
    description:
      "Unless your're a bachleor, you won't be cuddled up with your rifles! Keep your inventory of goodies safe and locked away from children, visitors, and unwanted guests...",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1712704012/424428450_378204144831543_1133807574779722000_n.jpg_dabou2_mlqpnj.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Weather Proof & Fire Proof",
    description:
      "Protect your cash, jewlery, and second amendment with weather proof and fire proof safes, don't let mother nature have her way with your goods!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1710528445/dataism-24_y9ufhd.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
