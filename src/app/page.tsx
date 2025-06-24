import Image from "next/image";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <main style={{ fontFamily: "Poppins" }} className="pt-10">
      <div className="flex flex-col justify-center items-center">
        {/* <Image
          src="/devlog.png"
          alt="DevLog Logo"
          width={150}
          height={150}
          className=""
        /> */}
        <h1 className="text-green-400 text-4xl mb-5 font-bold">
          Welcome to DevLog
        </h1>
        <p className="text-green-300 text-justify">
          I'm Izaan Khan — a full-blooded digital architect with a poetic soul
          and a keyboard on fire. I turn caffeine and creativity into modern,
          responsive websites that don't just work... they *wow*. Founder of
          Websters, a startup helping students showcase their journeys through
          sleek portfolio sites. I mix art with code, and logic with intuition —
          because the internet doesn't need another boring site.
        </p>
      </div>
      <div>
        <div className="my-8 h-10 flex items-center">
          <Search className="h-5 absolute ml-2 text-[#00330a]" />
          <input
            type="text"
            className="border-2 outline-hidden hover:border-black transition duration-200 bg-green-700 rounded-md text-[#00330a] text-sm h-full w-full pl-10 px-5"
            placeholder="Search posts"
          />
        </div>
      </div>
    </main>
  );
}
