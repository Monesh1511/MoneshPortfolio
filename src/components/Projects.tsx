import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import licensePlateImage from "../assets/license-plate-recognition.jpg";
import diabeticDetectionImage from "../assets/diabetic-detection.jpg";
import spamDetectionImage from "../assets/spam-detection.jpg";
import busTicketBookingImage from "../assets/bus-ticket-booking.jpg";
import profileImage from "../assets/EasyNutro.png";
import vehitraxImage from "../assets/Vehitrax-AI.jpg";

const projects = [
  {
    title: "Vehitrax AI Transport Command Center",
    category: "React, FastAPI, OCR,YOLO, WebSocket",
    description: "Smart college transport monitoring platform with AI-powered number plate recognition, live dashboard updates, and automated entry/exit compliance reports.",
    image: vehitraxImage,
    status: "Live Repository",
    link: "https://github.com/Monesh1511/Vehitrax-AI-Transport-Command-Center",
  },
  {
    title: "Bus Ticket Booking System",
    category: "Java, MySQL",
    description: "Created a Java-based backend application for bus ticket booking with MySQL database integration.",
    image: busTicketBookingImage,
    status: "Completed",
  },
  {
    title: "EasyNutro",
    category: "React, FastAPI, ML",
    description: "A nutrition tracking app with personalized meal recommendations based on user dietary preferences and health goals.",
    image: profileImage,
    status: "Currently Building",
  },
  {
    title: "SkillSprint Tracker",
    category: "React, CSS, DSA",
    description: "A clean performance dashboard to track LeetCode streaks, DSA topic mastery, and weekly learning goals with visual progress analytics.",
    image: diabeticDetectionImage,
    status: "In Progress",
  },
  {
    title: "Smart Transit API Suite",
    category: "Java, Spring Boot, FastAPI",
    description: "Microservice-ready backend combining Spring Boot core services and FastAPI ML endpoints for fare prediction, route optimization, and seat demand forecasting.",
    image: busTicketBookingImage,
    status: "Architecture Phase",
  },
];

const miniProjects = [
  {
    title: "License Plate Recognition",
    category: "Computer Vision, Python",
    description: "Built a computer vision system to detect and recognize vehicle license plates using OpenCV and Python with preprocessing, contour-based plate detection, and OCR.",
    image: licensePlateImage,
    status: "Completed",
  },
  {
    title: "Diabetic Detection",
    category: "Machine Learning, Healthcare",
    description: "Developed a machine learning model to predict diabetes based on patient health data using scikit-learn and pandas.",
    image: diabeticDetectionImage,
    status: "Model Improved",
  },
  {
    title: "Spam Detection",
    category: "NLP, Classification",
    description: "Implemented a text classification model to identify spam messages using NLP techniques and machine learning.",
    image: spamDetectionImage,
    status: "Completed",
  },
];

const Projects = () => {
  const [activeMiniProjectIndex, setActiveMiniProjectIndex] = useState(0);
  const activeMiniProject = miniProjects[activeMiniProjectIndex];

  const showPreviousMiniProject = () => {
    setActiveMiniProjectIndex((prevIndex) =>
      prevIndex === 0 ? miniProjects.length - 1 : prevIndex - 1,
    );
  };

  const showNextMiniProject = () => {
    setActiveMiniProjectIndex((prevIndex) =>
      prevIndex === miniProjects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          FEATURED PROJECTS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center text-muted-foreground mb-12"
        >
          Real projects, real learning loops. I iterate fast, write clean code, and focus on shipping solutions that are practical and scalable.
        </motion.p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/85 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-52 md:h-56 overflow-hidden">
              <img
                src={activeMiniProject.image}
                alt={`${activeMiniProject.title} screenshot`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-foreground">
                <Sparkles className="w-3 h-3 text-accent" />
                {activeMiniProject.status}
              </div>
              <div className="absolute right-4 bottom-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPreviousMiniProject}
                  className="p-2 rounded-full border border-border bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  aria-label="Show previous mini project"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={showNextMiniProject}
                  className="p-2 rounded-full border border-border bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  aria-label="Show next mini project"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1 leading-tight">Mini Projects</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">{activeMiniProject.category}</p>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-border px-2 py-1 text-[11px] font-semibold text-muted-foreground">
                  {activeMiniProjectIndex + 1}/{miniProjects.length}
                </div>
              </div>
              <h4 className="text-base font-semibold text-foreground mb-2">{activeMiniProject.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{activeMiniProject.description}</p>
              <p className="mt-4 text-xs text-muted-foreground/80"></p>
            </div>
          </motion.div>

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/85 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-52 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-foreground">
                  <Sparkles className="w-3 h-3 text-accent" />
                  {project.status}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 leading-tight">{project.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">{project.category}</p>
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="p-2 rounded-full border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all" aria-label={`View ${project.title}`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <p className="mt-4 text-xs text-muted-foreground/80">Project {String(index + 1).padStart(2, "0")}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
