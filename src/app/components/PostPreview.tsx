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
  imgSrc?: string;
}) {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="flex flex-col-reverse md:flex-row justify-between bg-green-800 p-5 rounded-lg shadow-lg mb-6 overflow-hidden"
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-green-400">
          {title}
        </h2>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-green-300 mt-2 text-sm sm:text-md">{description}</p>
        <Link href={"/posts/" + id}>
          <button className="mt-4 rounded-md text-green-700 cursor-pointer hover:text-green-400 hover:bg-green-700 duration-150 transition bg-green-400 px-4 py-1">
            Read More
          </button>
        </Link>
      </div>
      {imgSrc && <img src={imgSrc} className="h-auto md:mb-0 mb-4 md:ml-8 md:h-50 rounded-md" alt="preview" />}
      
    </div>
  );
}
