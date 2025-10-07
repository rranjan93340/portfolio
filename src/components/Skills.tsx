const skillCategories = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "MySQL"]
  },
  {
    category: "Programming",
    skills: ["C Programming", "Java", "Python", "Data Structures & Algorithms"]
  },
  {
    category: "Tools & Others",
    skills: ["Git", "MS Excel", "PowerBI"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="mt-20 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-glass-hover rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <h3 className="text-2xl font-bold mb-6 text-gradient relative z-10">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground font-medium hover:scale-105 hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
