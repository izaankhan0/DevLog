export default function About() {
  return (
    <div style={{ fontFamily: "Poppins" }} className="min-h-screen  text-green-300 px-6 py-12 md:px-20 md:py-20 font-[var(--font-geist-sans)]">
      <h1 className="text-4xl sm:text-5xl font-bold mb-10">About Me</h1>

      <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
        <img
          src="/devlog.png" // Replace with your actual avatar image path
          alt="Izaan Khan"
          className="w-24 h-24"
        />
        <div>
          <h2 className="text-2xl font-semibold">Izaan Khan</h2>
          <p className="text-green-400 text-md">Full Stack Website Developer</p>
        </div>
      </div>

      <p className="text-gray-300 text-base mb-10">
        Hi, I&apos;m Izaan Khan, a software engineer passionate about building innovative solutions and
        sharing my knowledge with the community. I have a strong background in web development, cloud
        computing, and machine learning. In my free time, I enjoy exploring new technologies,
        contributing to open-source projects, and writing about my experiences on this blog.
      </p>

      <h2 className="text-2xl font-bold mb-4">Interests</h2>
      <p className="text-gray-300 text-base mb-10">
        I&apos;m deeply interested in a variety of topics within the tech world and beyond. Some of my key
        interests include:
        <br />
        - <strong>Web Development:</strong> Building scalable and user-friendly web applications using
        modern frameworks and best practices.
        <br />
        - <strong>Cloud Computing:</strong> Leveraging cloud platforms like AWS and Azure to deploy and
        manage applications efficiently.
        <br />
        - <strong>Machine Learning:</strong> Exploring the potential of AI and machine learning to solve
        complex problems and create intelligent systems.
        <br />
        - <strong>Open Source:</strong> Contributing to and learning from open-source projects to foster
        collaboration and innovation.
        <br />
        - <strong>Blogging:</strong> Sharing my insights, experiences, and tutorials on various tech
        topics through this blog.
      </p>

      <h2 className="text-2xl font-bold mb-4">Purpose of the Blog</h2>
      <p className="text-gray-300 text-base">
        The purpose of this blog is to serve as a platform for me to document my learning journey, share
        my technical insights, and connect with other developers. I aim to provide valuable content that
        helps others grow their skills and stay updated with the latest trends in the industry. Whether
        you&apos;re a seasoned developer or just starting out, I hope you find something useful and inspiring
        here.
      </p>
    </div>
  );
}
