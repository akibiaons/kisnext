import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-[url('https://res.cloudinary.com/dfgr7tov1/image/upload/v1712353289/DALL_E_2024-04-05_14.29.14_-_A_sophisticated_modern_gun_safe_featured_in_a_dark-themed_dimly_lit_room_creating_a_luxurious_and_secure_atmosphere._The_safe_is_constructed_from_p_mkldcu.webp')] bg-cover bg-center min-h-[700px] flex items-center justify-center text-white">
      {/* Overlay div */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {/* Below is the text container */}
      <div className="relative z-10 text-center">
        <h2 className="text-6xl font-bold shadow-xl shadow-black mb-6">
          Keep it Safe California
        </h2>
        <p className="text-2xl mb-12 font-semibold shadow-xl shadow-black">
          High quality American Security & Cannon Safes
        </p>
        <a
          href="/products"
          className="text-xl bg-yellow-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Take a peek
        </a>
      </div>
    </div>
  );
}
