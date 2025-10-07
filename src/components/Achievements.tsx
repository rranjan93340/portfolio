import { Award, Trophy, BookOpen } from "lucide-react";

const certifications = [
  "Programming in Java (NPTEL)",
  "Database Management System (NPTEL)",
  "Enhancing Soft Skill (NPTEL)",
  "MySQL Essential Training (Coursera)"
];

const achievements = [
  {
    icon: Trophy,
    title: "TCS CodeVita Rank 1187",
    description: "Achieved impressive rank in competitive coding competition"
  },
  {
    icon: Award,
    title: "250+ Problems Solved",
    description: "Leetcode, GeeksforGeeks, and HackerRank combined"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="mt-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Certifications & Achievements</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Certifications */}
          <div className="card-glass-hover rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Certifications</h3>
            </div>
            <ul className="space-y-3 relative z-10">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                  <span className="text-primary mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            {/* Prepcampus.co stats */}
           
              

            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card-glass-hover rounded-2xl p-6 relative overflow-hidden group"
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-gradient">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

// Full-width Prepcampus highlight section
export const PrepcampusHighlight = () => {
  return (
    <section id="prepcampus" className="w-full bg-gradient-to-b from-background/80 to-background/95 py-5 ">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="bg-card card-glass rounded-3xl p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gradient mb-3">Prepcampus.co</h3>
              <p className="text-muted-foreground mb-4">
                An interactive web-based platform designed to help students prepare for placement exams through topic-wise MCQ tests and Company wise coding & aptitude Questions. Built using the MERN stack, it provides adaptive question sets, instant result evaluation, and detailed analytics.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold">Tech Stack</h4>
                <p className="text-muted-foreground">React, Node.js, Express, MongoDB, Tailwind CSS</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Topic-wise and company-specific MCQ tests</li>
                  <li>Result analysis with accuracy and speed metrics</li>
                  <li>Timer-based mock tests for exam simulation</li>
                  <li>Dynamic question shuffling </li>
                  <li>Clean and mobile-responsive interface</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="p-6 rounded-xl bg-background/30 text-center">
              <h1>1st Month</h1>
              <div className="h-px bg-border my-4" />
                <div className="text-3xl font-bold text-gradient">4K+</div>
                <div className="text-sm text-muted-foreground">Total Views </div>

                <div className="h-px bg-border my-4" />

                <div className="text-2xl font-semibold text-gradient">1K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>

                <div className="h-px bg-border my-4" />

                <div className="text-2xl font-semibold text-gradient">47K+</div>
                <div className="text-sm text-muted-foreground">Event Count</div>

                <a
                  href="https://prepcampus.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:opacity-95"
                >
                  Visit Prepcampus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
