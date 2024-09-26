"use client";
import Image from 'next/image';

const Projects = () => {
  const projectsList = [
    {
      title: "Luxury Home",
      description: "A stunning luxury home built with attention to detail.",
      image: "/luxury-home.jpg", // Replace with actual image
    },
    {
      title: "Modern Office",
      description: "A state-of-the-art office space designed for productivity.",
      image: "/modern-office.jpg", // Replace with actual image
    },
    {
      title: "Community Park",
      description: "A beautiful park designed for community enjoyment.",
      image: "/community-park.jpg", // Replace with actual image
    },
    {
      title: "Retail Space",
      description: "An inviting retail space tailored for shopping experiences.",
      image: "/retail-space.jpg", // Replace with actual image
    },
  ];

  return (
    <section className="py-20 bg-light-gray text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-10 max-w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Our Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, index) => (
          <div key={index} className="relative group overflow-hidden">
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-lg text-white">{project.description}</p>
              <button className="mt-4 px-4 py-2 bg-primary hover:bg-secondary text-white font-semibold rounded-lg shadow-lg transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
