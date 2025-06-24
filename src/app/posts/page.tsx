import PostCard from "../components/PostCard";
import { Search } from "lucide-react";

export default function Posts() {
  let posts = [
    {
      title: "TITLE TITLE TITLE TITLE",
      date: "11/12/2006",
      description: "loorem",
      imgSrc: "https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
    },
    {
      title: "TITLE TITLE TITLE TITLE",
      date: "11/12/2006",
      description: "loorem",
      imgSrc: "https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
    },
    {
      title: "TITLE TITLE TITLE TITLE",
      date: "11/12/2006",
      description: "loorem",
      imgSrc: "https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
    },
    {
      title: "TITLE TITLE TITLE TITLE",
      date: "11/12/2006",
      description: "loorem",
      imgSrc: "https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
    },
  ];
  return (
    <div className="" style={{ fontFamily: "Poppins" }}>
      <h1 className="text-4xl font-bold pt-7 text-center text-green-400 ">All Posts</h1>
      <div className="my-8 h-10 flex items-center">
          <Search className="h-5 absolute ml-2 text-[#00330a]" />
          <input
            type="text"
            className="border-2 outline-hidden hover:border-black transition duration-200 bg-green-700 rounded-md text-[#00330a] text-sm h-full w-full pl-10 px-5"
            placeholder="Search posts"
          />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index)=>{
          return (
            <PostCard 
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
    </div>
  );
}