export default function PostPreview({
  title,
  description,
  date,
  imgSrc = "",
}: {
  title: string;
  description: string;
  date: string;
  imgSrc?: string;}){
    return(
        <div className="flex flex-row justify-between bg-green-800 p-5 rounded-lg shadow-lg mb-6">
            <div>
                <h2 className="text-2xl font-bold text-green-400">{title}</h2>
                <p className="text-sm text-gray-400">{date}</p>
                <p className="text-green-300 mt-2">{description}</p>
                <button className="mt-4 rounded-xl text-green-700 cursor-pointer hover:text-green-400 hover:bg-green-700 duration-150 transition bg-green-400 px-4 py-1">Read More</button>
            </div>
            <img className="h-50 rounded-md" src={imgSrc} alt="post image" />
        </div>
    );
  }