export default function Post() {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <div className="flex flex-row pt-10 pb-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-green-400">
            TITLE TITLE TITLE TITLE TITLE
          </h1>
          <p className="text-lg my-1 text-gray-400">11/11/2009</p>
          <p className="text-green-300 mt-2 text-sm sm:text-md">
            description description description description description
            description description description description description
            description description description description description
            description description description description description
          </p>
        </div>
        <img
          className="h-60 rounded-md"
          src="https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg"
          alt=""
        />
      </div>
      <hr />
      <div className="my-10">
        <div className="flex flex-row h-50">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-green-400">Added details to cards</p>
            <p className="text-md text-gray-400 my-1">12/11/2005 - 5:00 PM</p>
            <p className="text-green-300 mt-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            </p>
          </div>
          <img className="rounded-md" src="https://t4.ftcdn.net/jpg/03/14/81/65/360_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
