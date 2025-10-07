import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    
    
    <section id="about" className=" mt-20 px-4 relative">
      
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">About Me</span>
        </h2>
{/* Contact Info */}
        <div className="mt-8 card-glass-hover mb-5 rounded-2xl p-6 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Delhi, India</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border" />
            <a href="mailto:rranjan07th@gmail.com" className="hover:text-primary hover:scale-105 transition-all duration-300">
              rranjan07th@gmail.com
            </a>
            <div className="hidden md:block w-px h-6 bg-border" />
            <a href="tel:+919334044919" className="hover:text-primary hover:scale-105 transition-all duration-300">
              +91 9334044919
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Objective */}
          <div className="card-glass-hover rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold mb-4 text-gradient relative z-10">Objective</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              I'm a highly driven, meticulous, and productive individual seeking a Full Stack Developer position. 
              Proficient in both front-end and back-end technologies including JavaScript (React, Node.js), HTML/CSS, 
              Python, and SQL/NoSQL databases and Data Structures and Algorithms. Passionate about clean code, 
              intuitive UI, and continuous learning, eager to build impactful products with a forward-thinking team.
            </p>
          </div>

          {/* Education */}
          <div className="card-glass-hover rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold mb-6 text-gradient relative z-10">Education</h3>
            <div className="space-y-6 relative z-10">
              <div className="border-l-2 border-primary/50 pl-4 hover:border-primary transition-colors duration-300">
                <div className="flex items-start gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-muted-foreground">University of Engineering and Management, Kolkata</p>
                    <p className="text-sm text-primary">2021 - 2025</p>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-primary/50 pl-4 hover:border-primary transition-colors duration-300">
                <div className="flex items-start gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Intermediate in Science</h4>
                    <p className="text-muted-foreground">DR Chandra deo yadav +2 H/S Bilauri, Lakhisarai</p>
                    <p className="text-sm text-primary">2021</p>
                  </div>
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
