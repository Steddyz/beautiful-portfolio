import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I am passionate about crafting innovative digital solutions that
              enhance user experiences. With a strong foundation in TypeScript
              and a focus on creating modern IT products.
            </p>
            <p className="text-muted-foreground">
              My commitment to continuous learning drives me to explore new
              trends and tools in the tech industry, ensuring that I stay ahead
              of the curve and bring fresh ideas to every project I undertake.
            </p>
            <p className="text-muted-foreground">
              I also have the ability to create comprehensive UI/UX designs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://github.com/Steddyz"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Check My Github
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI\UX Design</h4>
                  <p className="text-muted-foreground">
                    I am dedicated to creating intuitive and engaging user
                    experiences that seamlessly blend functionality with
                    aesthetics.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Dynamic and responsive web applications that cater to
                    diverse user needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Projects</h4>
                  <p className="text-muted-foreground">
                    I specialize in overseeing the planning, execution, and
                    successful completion of projects within tech and
                    development environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
