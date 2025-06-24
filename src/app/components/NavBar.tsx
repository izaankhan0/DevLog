"use client";
import Link from "next/link";
import { Search } from 'lucide-react';
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
    const pathname = usePathname();
  return (
    <nav
      style={{ fontFamily: "Poppins" }}
      className="bg-[#00330a] border-b-2 flex justify-between items-center h-18"
    >
      <ul className="flex min-w-[30%] justify-center items-center">
        <Image
          src="/devlog.png"
          alt="DevLog Logo"
          width={50}
          height={50}
          className="ml-10 mr-6"
        />
        <Link className={`mx-4 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-4 ${pathname === '/'? 'bg-green-400 text-[#00330a]':""}`} href="/">
          Home
        </Link>
        <Link className={`mx-4 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-4 ${pathname === '/about'? 'bg-green-400 text-[#00330a]':""}`} href="/about">
          About
        </Link>
        <Link className={`mx-4 cursor-pointer font-[500] transition duration-100 hover:bg-green-800 py-2 rounded-md px-4 ${pathname === '/posts'? 'bg-green-400 text-[#00330a]':""}`} href="/posts">
          Posts
        </Link>
      </ul>
      <h1 className="text-3xl font-extrabold text-center text-green-400 w-2/5">DevLog</h1>
      <div className="flex w-[30%] justify-center items-center">
        <div className="mx-4 h-10 flex items-center">
          <Search className="h-5 absolute ml-2 text-[#00330a]"/>
          <input
            type="text"
            className="border-2 outline-hidden hover:border-black transition duration-200 bg-green-700 rounded-md text-[#00330a] text-sm h-full w-full pl-10 px-5"
            placeholder="Search"
          />
        </div>
        <div className="h-12 w-12 rounded-full bg-green-700"></div>
      </div>
    </nav>
  );
}
