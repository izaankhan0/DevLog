import { Search } from "lucide-react";
import PostPreview from "./components/PostPreview";

export default function Home() {
  let posts = [
    {
      title: "TITLE TITLE TITLE TITLE",
      date: "11/12/2006",
      description:
        "loorem",
      imgSrc: "https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
    },
    {
      title: "TITLE TITLE TITLE TITLE",
      date: "11/12/2006",
      description:
        "loorem",
      imgSrc: "https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
    },
    {
      title: "TITLE TITLE TITLE TITLE",
      date: "11/12/2006",
      description:
        "loorem",
      imgSrc: "https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
    },
  ];
  return (
    <main style={{ fontFamily: "Poppins" }} className="py-10">
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
        {posts.map((post, index) => {
          return (
            <PostPreview
              key={index + 1}
              id={index + 1}
              title={post.title}
              date={post.date}
              description={post.description}
              imgSrc={post.imgSrc}
            />
          );
        })}
      </div>
    </main>
  );
}
