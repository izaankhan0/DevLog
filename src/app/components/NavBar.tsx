"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function NavBar() {
  const pathname = usePathname();
  function toggle() {
    document.getElementById("van")?.classList.toggle("translate-x-full");
  }
  return (
    <ClerkProvider>
      {/* VAN */}
      <div onClick={toggle} className="z-300 fixed lg:hidden flex flex-col justify-between h-9 w-14  left-6 top-6">
        <div className="bg-white w-full h-2 rounded-md"></div>
        <div className="bg-white w-full h-2 rounded-md"></div>
        <div className="bg-white w-full h-2 rounded-md"></div>
      </div>

      <div
        id="van"
        style={{ fontFamily: "Poppins" }}
        className="transition duration-500 ease-in-out backdrop-blur-3xl pt-20 z-200 flex lg:hidden flex-col justify-start items-center fixed h-full right-0 w-70"
      >

        <div>
          <div onClick={toggle} className=" w-0.5 bg-white rotate-45 h-10"></div>
          <div onClick={toggle} className=" w-0.5 bg-white -rotate-45 h-10 relative bottom-10"></div>
        </div>

        <Image
            src="/devlog.png"
            alt="DevLog Logo"
            width={80}
            height={80}
            className=""
          />
        <h1 className="mt-4 mb-5 text-3xl font-extrabold text-center text-green-400">
          DevLog
        </h1>
        <ul className="flex justify-center items-center flex-col mb-8">
          
          <Link
            className={`mx-4 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-4 ${
              pathname === "/" ? "bg-green-400 text-[#00330a]" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`mx-4 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-4 ${
              pathname === "/about" ? "bg-green-400 text-[#00330a]" : ""
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`mx-4 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-4 ${
              pathname === "/posts" ? "bg-green-400 text-[#00330a]" : ""
            }`}
            href="/posts"
          >
            Posts
          </Link>
          <Link
            className={`mx-4 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-4 ${
              pathname === "/admin" ? "bg-green-400 text-[#00330a]" : ""
            }`}
            href="/admin"
          >
            Admin
          </Link>
        </ul>
        <div className="flex justify-center items-center mx-5">
          <div className="mx-4 h-10 flex items-center">
            <Search className="h-5 absolute ml-2 text-[#00330a]" />
            <input
              type="text"
              className="border-2 outline-hidden hover:border-black transition duration-200 bg-green-700 rounded-md text-[#00330a] text-sm h-full w-full pl-10 px-5"
              placeholder="Search"
            />
          </div>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <UserButton />
        </div>
      </div>
      {/* VAN */}

      <nav
        style={{ fontFamily: "Poppins" }}
        className="bg-[#00330a] border-b-2 hidden lg:flex justify-between items-center h-18"
      >
        <ul className="flex w-[40%] justify-center items-center">
          <Image
            src="/devlog.png"
            alt="DevLog Logo"
            width={50}
            height={50}
            className="ml-10 mr-6"
          />
          <Link
            className={`mx-2 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-3 ${
              pathname === "/" ? "bg-green-400 text-[#00330a]" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`mx-2 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-3 ${
              pathname === "/about" ? "bg-green-400 text-[#00330a]" : ""
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`mx-2 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-3 ${
              pathname === "/posts" ? "bg-green-400 text-[#00330a]" : ""
            }`}
            href="/posts"
          >
            Posts
          </Link>
          <Link
            className={`mx-2 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-3 ${
              pathname === "/admin" ? "bg-green-400 text-[#00330a]" : ""
            }`}
            href="/admin"
          >
            Admin
          </Link>
        </ul>
        <h1 className="text-3xl font-extrabold text-center text-green-400 w-1/5">
          DevLog
        </h1>
        <div className="flex w-[40%] justify-center items-center">
          <div className="mx-4 h-10 flex items-center">
            <Search className="h-5 absolute ml-2 text-[#00330a]" />
            <input
              type="text"
              className="border-2 outline-hidden hover:border-black transition duration-200 bg-green-700 rounded-md text-[#00330a] text-sm h-full w-full pl-10 px-5"
              placeholder="Search"
            />
          </div>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <UserButton />
        </div>
      </nav>
    </ClerkProvider>
  );
}
