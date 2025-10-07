import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "AALions's infotech Pvt. Ltd.",
    period: "5th April 2025 - 10th August 2025",
    description: [
      "Developed and maintained a Learning Management System (LMS) and College Institute (CI)",
      "Collaborated in the software development including design, development, and testing using MERN",
      "Built responsive front-end interfaces using React.js and Tailwind CSS",
      "Implemented RESTful APIs and back-end services with Node.js and Express.js"
    ]
  },
  {
    role: "Frontend Web Development",
    company: "CSRBOX With IBM SkillsBuild",
    period: "25th June 2024 - 5th August 2024",
    description: [
      "Assigned to work on a project focused on the Sustainable Development Goals",
      "Developed Scrapify - a web platform to promote environmental sustainability",
      "Used HTML, CSS and Javascript to build responsive interfaces"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="mt-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-glass-hover rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary group-hover:w-2 transition-all duration-300" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1 text-gradient">{exp.role}</h3>
                  <p className="text-lg text-primary mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
