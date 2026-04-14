import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { CONTACT_GMAIL_COMPOSE_URL } from "@/lib/contact";

const Hero = () => {
  return (
    <section id="home" className="relative mesh-bg overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 grain-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 pill bg-primary/10 text-primary mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Open to internships and cool builds
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.96] text-foreground"
            >
              Monesh D
              <span className="block font-body text-lg sm:text-xl lg:text-2xl font-semibold mt-5 text-muted-foreground tracking-wide">
                ML Engineer + React Developer building practical, human-first products
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              Currently working with <strong className="text-foreground">ML, React, CSS, FastAPI, Java, and Spring Boot</strong>. I enjoy solving LeetCode problems daily,
              learning DSA deeply, and turning ideas into reliable products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                Explore My Projects
              </a>
              <a
                href="/Monesh%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full border border-border text-sm font-semibold hover:border-foreground hover:text-foreground transition-colors"
              >
                View / Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="https://leetcode.com/u/Monesh1511/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                LeetCode
              </a>
              <a
                href="https://github.com/Monesh1511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={CONTACT_GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="justify-self-center w-full max-w-lg"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-border/70 shadow-2xl bg-card">
              <img
                src={profileImage}
                alt="Monesh D"
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
              <div className="absolute left-4 right-4 bottom-4 glass-card p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground"></p>
                <p className="mt-2 text-sm sm:text-base font-semibold text-foreground">Focused on getting better, not perfect!!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
