import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "License Plate Recognition",
    category: "Computer Vision, Python",
    description: "Built a computer vision system to detect and recognize vehicle license plates using OpenCV and Python with preprocessing, contour-based plate detection, and OCR.",
    color: "from-orange-200 to-amber-100",
  },
  {
    title: "Diabetic Detection",
    category: "Machine Learning, Healthcare",
    description: "Developed a machine learning model to predict diabetes based on patient health data using scikit-learn and pandas.",
    color: "from-rose-200 to-pink-100",
  },
  {
    title: "Spam Detection",
    category: "NLP, Classification",
    description: "Implemented a text classification model to identify spam messages using NLP techniques and machine learning.",
    color: "from-blue-200 to-indigo-100",
  },
  {
    title: "Bus Ticket Booking System",
    category: "Java, MySQL",
    description: "Created a Java-based backend application for bus ticket booking with MySQL database integration.",
    color: "from-emerald-200 to-teal-100",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          RECENT PROJECTS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient background */}
              <div className={`h-48 md:h-56 bg-gradient-to-br ${project.color} p-6 flex items-end`}>
                <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground/80">0{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <button className="p-2 rounded-full border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
