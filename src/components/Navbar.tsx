import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">KIS Cali</Link>
        </div>
        <div>
          <div className="flex space-x-4">
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
