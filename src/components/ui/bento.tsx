import Image from "next/image";
import React from "react";

// Icon Import
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface Safe {
  id: string;
  name: string;
  image: string; // URL to the image of the safe
}

interface Brand {
  id: string;
  name: string;
  logo: string;
  bestSellingSafes: Safe[];
}

// After using TypeSript interface for type saftey we need to declare the data in an object array
const brands: Brand[] = [
  {
    id: "AmSec",
    name: "American Security",
    logo: "https://res.cloudinary.com/dfgr7tov1/image/upload/v1712693361/amsecSafe_gk9ybq.jpg",
    bestSellingSafes: [
      {
        id: "safe1",
        name: "Amsec 1",
        image:
          "https://res.cloudinary.com/dfgr7tov1/image/upload/v1712704082/427390830_403363228837118_6003272896523204993_n_one6kb.jpg",
      },
      {
        id: "safe2",
        name: "Amsec 2",
        image:
          "https://res.cloudinary.com/dfgr7tov1/image/upload/v1712704074/425129197_947710243447752_6726829984186439078_n_z51jhf.jpg",
      },
    ],
  },
  {
    id: "Cannon",
    name: "Cannon Safes",
    logo: "https://res.cloudinary.com/dfgr7tov1/image/upload/v1712693361/canon_safes_2_lfv5mf.jpg",
    bestSellingSafes: [
      {
        id: "safe1",
        name: "Cannon 1",
        image:
          "https://res.cloudinary.com/dfgr7tov1/image/upload/v1712704652/Screenshot_2024-04-09_at_4.17.25_PM_ajf7l4.png",
      },
      {
        id: "safe2",
        name: "Cannon 2",
        image:
          "https://res.cloudinary.com/dfgr7tov1/image/upload/v1712704636/Screenshot_2024-04-09_at_4.17.08_PM_gxde48.png",
      },
    ],
  },
];

const Bento: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto text-black pt-20 pb-20">
      <div className="grid grid-cols-3 gap-4">
        {brands.map((brand) => (
          <React.Fragment key={brand.id}>
            {/* First column for the brand */}
            <div className="flex items-center">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={200}
                height={200}
              />
              <MdKeyboardDoubleArrowRight className="text-black w-20 h-20" />
            </div>
            {/* Second and third columns for the best selling safes */}
            {brand.bestSellingSafes.map((safe) => (
              <div
                key={safe.id}
                className="flex flex-col items-center border-2 border-black"
              >
                <Image
                  src={safe.image}
                  alt={safe.name}
                  width={200}
                  height={200}
                />
                <h3 className="text-2xl font-semibold uppercase">
                  {safe.name}
                </h3>
                <div className="underline hover:cursor-pointer">
                  <p className="hover:cursor-pointer">See More...</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Bento;
