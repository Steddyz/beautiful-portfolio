import React from "react";
import Skills from "./Skills";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Architectural workshop",
    description:
      "Welcome to our Architectural Workshop, where creativity meets functionality, powered by React and JavaScript.",
    image: "/projects/architectProject.png",
    tags: ["React", "JavaScript", "HTML", "CSS", "Axios", "Vite"],
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Evogym fitness",
    description:
      "Welcome to Evogym Fitness, your ultimate destination for health and wellness.",
    image: "/projects/gymProject.png",
    tags: ["React", "TypeScript", "TailwindCSS", "HTML", "Vite"],
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Recipe by Steddy",
    description:
      "Discover culinary inspiration with Recipe by Steddy, your go-to source for delicious and easy-to-follow recipes.",
    image: "/projects/recipesProject.png",
    tags: ["React", "JavaScript", "HTML", "CSS", "Axios", "Vite"],
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Hilink Travels",
    description:
      "Welcome to Hilink Travels, your trusted partner in crafting unforgettable travel experiences.",
    image: "/projects/travelProject.png",
    tags: ["React", "TypeScript", "Next.js", "HTML", "TailwindCSS", "Vite"],
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Pokemon Pokedex",
    description:
      "Step into the enchanting world of Pokemon with the Pokemon Pokedex, your comprehensive resource for all things Pokemon!",
    image: "/projects/pokedexProject.png",
    tags: ["React", "TypeScript", "HTML", "Axios", "CSS", "Vite"],
    demoUrl: "#",
  },
  {
    id: 6,
    title: "Car Rental Shop",
    description:
      "Discover the freedom of the open road with Car Rental Shop, your premier choice for car rentals!",
    image: "/projects/carRentalProject.png",
    tags: ["React", "TypeScript", "Next.js", "HTML", "TailwindCSS", "Vite"],
    demoUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold">
          Featured<span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few of my latest projects. Each one has been thoughtfully
          designed with a focus on detail, efficiency, and the overall user
          experience.
        </p>

        <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              key={key}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="border px-2 py-1 text-xs font-medium rounded-full bg-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-mute-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
