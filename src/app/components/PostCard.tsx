"use client";
import Link from "next/link";

export default function PostPreview({
  id,
  title,
  description,
  date,
  imgSrc = "",
}: {
  id: number;
  title: string;
  description: string;
  date: string;
  imgSrc?: string;}){
    return(
        <div style={{ fontFamily: "Poppins" }} className="flex flex-col-reverse justify-between bg-green-800 p-5 rounded-lg shadow-lg mb-6 overflow-hidden">
            <div>
                <h2 className="text-xl sm:text-2xl font-bold text-green-400">{title}</h2>
                <p className="text-sm text-gray-400">{date}</p>
                <p className="text-green-300 mt-2 text-sm sm:text-md">{description}</p>
                <Link href={"/posts/" + id}><button className="mt-4 rounded-xl text-green-700 cursor-pointer hover:text-green-400 hover:bg-green-700 duration-150 transition bg-green-400 px-4 py-1">Read More</button></Link>
            </div>
            <img className="h-auto mb-4 md:h-50 rounded-md" src={imgSrc} alt="post image" />
        </div>
    );
  }