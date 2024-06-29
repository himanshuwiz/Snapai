import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Himanshu Dhingra",
      image: "/himanshu.jpg", // Replace with actual image path
      education: "B.Tech in Computer Science",
      techStack: "React Developer",
      bio: "Himanshu is passionate about web development and AI technologies. He specializes in frontend development using React and enjoys building user-friendly interfaces.",
    },
    {
      name: "Arpit Bansal",
      image: "/arpit.jpg", // Replace with actual image path
      education: "B.Tech ",
      techStack: "Python",
      bio: "Arpit is proficient in backend development and database management. He has expertise in Python, focusing on scalable and secure web applications.",
    },
    {
      name: "Ishan Grover",
      image: "/ishan.jpg", // Replace with actual image path
      education: "B.Tech in Computer Science",
      techStack: "Rust,C++",
      bio: "Ishan  is proficient in backend development and database management. He has expertise in Python, focusing on scalable and secure web applications.",
    },
    {
      name: "Aktri",
      image: "/aktri.jpg", // Replace with actual image path
      education: "B.Tech ",
      techStack: "lorem ispum",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, justo quis vehicula tempus",
    },
    {
      name: "Naina",
      image: "/naina.jpg", // Replace with actual image path
      education: "B.Tech",
      techStack: "lorem ispum",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, justo quis vehicula tempus",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white bg-opacity-5">
      <div className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white bg-opacity-5 flex flex-col md:flex-row items-center justify-between mt-12">
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-600">
            Our Technology
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            SnapAI is revolutionizing photo organization with advanced AI
            technology. Our Python API enables seamless sorting and
            identification of faces in your photos, offering unparalleled
            accuracy and efficiency. Whether you're managing personal memories
            or optimizing professional workflows, SnapAI simplifies the process,
            ensuring every face is recognized and organized effortlessly.
          </p>
        </div>
        <div className="md:w-1/2 h-64 md:h-96 flex justify-center items-center">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-200 text-center">
        Meet the Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-200 bg-opacity-15 p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-2">
              {member.name}
            </h2>
            <p className="text-gray-500 text-lg mb-4">{member.education}</p>
            <p className="text-gray-100 mb-4">{member.bio}</p>
            <p className="text-gray-500 font-semibold">Tech Stack:</p>
            <p className="text-gray-500">{member.techStack}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
