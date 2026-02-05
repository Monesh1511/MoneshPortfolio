import { motion } from "framer-motion";

const skills = {
  languages: ["Python", "Java", "SQL"],
  libraries: ["Pandas", "NumPy", "scikit-learn", "OpenCV", "Matplotlib", "EasyOCR"],
  tools: ["Git", "GitHub", "VS Code", "Eclipse", "MySQL Workbench"],
};

const stats = [
  { value: "4+", label: "Projects Completed" },
  { value: "1", label: "Internship" },
  { value: "3+", label: "Programming Languages" },
  { value: "2024", label: "Started Journey" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Crafting intelligent solutions for real-world problems.
              </h2>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          SKILLS & TOOLS
        </motion.h2>

        {/* Skills Grid */}
        <div className="space-y-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center gap-4 pb-8 border-b border-border"
          >
            <div className="md:w-48 flex-shrink-0">
              <h3 className="text-lg font-semibold text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Libraries */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-center gap-4 pb-8 border-b border-border"
          >
            <div className="md:w-48 flex-shrink-0">
              <h3 className="text-lg font-semibold text-foreground">Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.libraries.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="md:w-48 flex-shrink-0">
              <h3 className="text-lg font-semibold text-foreground">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
