import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <ul className="px-40 mt-20">
          <li className="text-xl mb-6">Veteran Owned</li>
          <li className="text-xl">Serving San Digeo + San Diego County</li>
          <p className="mt-10">
            American Security and Cannon Safe epitomize high-quality and
            affordability in the security industry. Founded in 1946, American
            Security has built a legacy of delivering top-notch security
            solutions. Cannon Safe, established in 1965, similarly offers a
            range of durable safes known for their quality and
            cost-effectiveness. Both brands are celebrated for their commitment
            to excellence, standing as trusted leaders in protecting valuables
            with decades of expertise.
          </p>
        </ul>
      </div>
      <div className="flex justify-center">
        <Image
          src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1712862595/DALL_E_2024-04-11_12.09.45_-_A_creative_depiction_of_quality_showcasing_a_golden_seal_of_excellence._The_seal_is_embossed_on_a_premium_textured_paper_background_symbolizing_hig_wxuypb.webp"
          width={200}
          height={200}
          className=""
          alt="about us"
        />
      </div>
    </div>
  );
}
