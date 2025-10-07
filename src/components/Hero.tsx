import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code2 } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding px-4 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient-shift bg-[length:200%_200%]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%)] animate-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.15),transparent_50%)] animate-glow" />
      
      {/* Floating orbs */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '5s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-2xl opacity-40 animate-glow group-hover:opacity-60 transition-opacity duration-500 bg-[length:200%_200%] animate-gradient-shift" />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl" />
              <img
                src={profileImage}
                alt="Ravi Ranjan - Full Stack Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-[0_0_50px_rgba(6,182,212,0.3)] group-hover:border-primary/50 group-hover:shadow-[0_0_80px_rgba(6,182,212,0.5)] transition-all duration-500 animate-float-slower"
                style={{ animation: 'float 60s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">Ravi Ranjan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about building impactful products with clean code and intuitive UI. 
              Proficient in MERN stack, Java, Python, and Data Structures & Algorithms.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 glow-effect"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300"
                asChild
              >
                <a href="/Ravi_Ranjan_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                asChild
              >
                <a href="https://github.com/rranjan93340/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                asChild
              >
                <a href="https://www.linkedin.com/in/ranjan07th/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                asChild
              >
                <a href="https://leetcode.com/u/rranjan07th/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
                  <Code2 className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
