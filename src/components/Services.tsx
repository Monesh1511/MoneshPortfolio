import { motion } from "framer-motion";
import { Brain, Coffee, Dumbbell, Film, HeartHandshake, Trophy } from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "Machine Learning Systems",
    description: "From preprocessing to deployment, I build ML features that are explainable, testable, and production-ready.",
  },
  {
    icon: Trophy,
    title: "Problem Solving",
    description: "I regularly solve LeetCode challenges and sharpen my Data Structures and Algorithms fundamentals.",
  },
  {
    icon: Coffee,
    title: "Full-Stack Delivery",
    description: "Building modern frontends with React + CSS and backend APIs using FastAPI, Java, and Spring Boot.",
  },
];

const personality = [
  { icon: Dumbbell, text: "Gym consistency for 4+ years" },
  { icon: Film, text: "Cinema lover and visual storyteller" },
  { icon: HeartHandshake, text: "Spreading love and kindness" },
];

const Services = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          ABOUT ME
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am an AI and ML focused Computer Science student who likes building products that solve real user problems,
            not just demo ideas. My mindset is simple: stay curious, stay disciplined, and keep improving every week.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass-card p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent grid place-items-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {personality.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card/70 p-4 text-sm font-medium text-foreground flex items-center justify-center gap-2"
              >
                <Icon className="w-4 h-4 text-accent" />
                {item.text}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
