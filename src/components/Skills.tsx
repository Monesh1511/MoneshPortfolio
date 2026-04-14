import { motion } from "framer-motion";

const skills = {
  core: ["Machine Learning", "React", "CSS", "FastAPI", "Java", "Spring Boot", "Python", "SQL"],
  mlAndData: ["scikit-learn", "Pandas", "NumPy", "OpenCV", "Matplotlib", "EasyOCR", "YOLO"],
  devTools: ["Git", "GitHub", "VS Code", "Postman", "MySQL Workbench"],
};

const stats = [
  { value: "7+", label: "Projects Built" },
  { value: "1", label: "Internship" },
  { value: "300+", label: "LeetCode Problems Goal" },
  { value: "Daily", label: "DSA Practice" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass-card p-8 lg:p-10 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Stack, Skills, and What I&apos;m Learning Next
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I like balancing product execution with algorithmic thinking. That means building end-to-end apps and also getting stronger with DSA every week.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6"
          >
            <div className="md:w-48 flex-shrink-0 mb-3 md:mb-0">
              <h3 className="text-lg font-semibold text-foreground">Core Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.core.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="md:w-48 flex-shrink-0 mb-3 md:mb-0">
              <h3 className="text-lg font-semibold text-foreground">Python Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.mlAndData.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="md:w-48 flex-shrink-0 mb-3 md:mb-0">
              <h3 className="text-lg font-semibold text-foreground">Tools and Workflow</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.devTools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-dashed border-border bg-card/60 p-6 text-center"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-[0.16em]">Current Learning Sprint</p>
            <p className="mt-2 text-base sm:text-lg font-semibold text-foreground">
              Advanced DSA patterns, Spring Boot architecture, and high-performance FastAPI integration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
