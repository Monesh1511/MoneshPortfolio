import { motion } from "framer-motion";
import { MapPin, Building2, Calendar, Code2, ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "July to August 2025",
    role: "Machine Learning Intern",
    company: "Euclid Technologies, Bangalore",
    description: "Built a computer vision-based license plate recognition system using OpenCV and Python, incorporating preprocessing, contour-based plate detection, and OCR for text extraction.",
    skills: ["Python", "OpenCV", "Computer Vision", "OCR"],
    certificateLink: "/Monesh%20D%20Internship%20Certificate.pdf",
  },
  {
    period: "2025 - Present",
    role: "Personal Project Builder",
    company: "Self-driven learning and building",
    description: "Designing and shipping ML + full-stack projects with React, FastAPI, Java, and Spring Boot while improving architecture and deployment practices.",
    skills: ["React", "FastAPI", "Java", "Spring Boot"],
  },
];

const education = {
  institution: "Sri Sairam Engineering College",
  degree: "Bachelor of Engineering - Computer Science",
  specialization: "Specialization in AI & ML",
  period: "2024 - 2028",
  location: "Chennai, Tamil Nadu",
};

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          JOURNEY
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Work Experience
            </h3>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent rounded-full" />
                <div className="glass-card p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                  <p className="text-sm text-accent mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {exp.certificateLink ? (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education and Growth
            </h3>

            <div className="glass-card p-6 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                {education.period}
              </div>
              <h4 className="text-lg font-semibold text-foreground">{education.institution}</h4>
              <p className="text-sm text-foreground mb-1">{education.degree}</p>
              <p className="text-sm text-accent mb-3">{education.specialization}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {education.location}
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent" /> Current Momentum
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Consistent LeetCode problem solving to improve interview readiness.</li>
                <li>Deep focus on DSA topics: arrays, graphs, dynamic programming, and trees.</li>
                <li>Building deployable systems that combine frontend polish with backend reliability.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
