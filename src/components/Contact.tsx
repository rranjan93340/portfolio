import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="mt-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Get In Touch</span>
        </h2>

        <div className="card-glass rounded-2xl p-8 md:p-12 text-center space-y-8">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              asChild
            >
              <a href="mailto:rranjan07th@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="tel:+919334044919">
                <Phone className="mr-2 h-5 w-5" />
                Call Me
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Connect with me on</p>
            <div className="flex gap-4 justify-center">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                asChild
              >
                <a href="https://github.com/rranjan93340/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                asChild
              >
                <a href="https://www.linkedin.com/in/ranjan07th/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                asChild
              >
                <a href="https://leetcode.com/u/rranjan07th/" target="_blank" rel="noopener noreferrer">
                  <Code2 className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
