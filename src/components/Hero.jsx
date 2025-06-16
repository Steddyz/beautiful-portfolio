import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I&apos;m </span>
            <span className="opacity-0  text-primary animate-fade-in-delay-1">
              Artem
            </span>
            <span className="opacity-0 animate-fade-in-delay-2"> Steddy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            My name is Artem Steddy. I am a web developer specializing in
            JavaScript, and I create modern IT products. I am currently studying
            at university to enhance my skills and knowledge in programming. In
            addition to my studies, I also self-improve by working on personal
            projects from home.
          </p>

          <div>
            <a
              href="#projects"
              className="cosmic-button opacity-0 animate-fade-in-delay-4"
            >
              View My Works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute flex flex-col bottom-8 left-1/2 transform -translate-x-1/2 items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
