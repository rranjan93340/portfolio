import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Image Generator",
    description: "Full-stack AI-powered image generation platform using the MERN stack with CLIP-based AI models. Integrated Razorpay payment gateway for secure transactions.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AI/ML", "Razorpay"],
    link: "https://github.com/rranjan93340/AI_Img_gen",
    
  },
  {
    title: "Kolkata Cafe Plaza",
    description: "Web platform highlighting the best cafes in Kolkata with ratings, locations, and cuisines. It features categorized menus with detailed pricing for online ordering and user reviews to help visitors effortlessly.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/rranjan93340/FoodWebsite",
    
  },
  {
    title: "Attendance Management System",
    description: "An interactive web-based platform designed to help students prepare for placement exams through topic-wise MCQ tests and real-time performance tracking.",
    technologies: ["Java", "MySQL", "NetBeans", "JFrame"],
    link: "https://github.com/rranjan93340/Attendance-management-system",
    
  }
];

const Projects = () => {
  return (
    <section id="projects" className="mt-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glass-hover rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold text-gradient">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 flex-1"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
                    asChild
                  >             
                  </Button>
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
