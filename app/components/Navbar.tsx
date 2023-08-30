import Link from "next/link";
import React from "react";
import Image from "next/image";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link
            href="/"
            className="flex items-center cursor-pointer hover:opacity-70 duration-500 ease-in-out"
          >
            {/* Logo */}
            <Image
              src="/id.png"
              alt="id-dev logo"
              width={75}
              height={75}
              //   className="cursor-pointer hover:scale-105 duration-500 ease-in-out"
            />
            <h1 className="text-2xl text-orange-400">
              <span>Blog</span>
            </h1>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
