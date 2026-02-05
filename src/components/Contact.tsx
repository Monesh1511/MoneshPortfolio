import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            LET'S TALK ABOUT<br />YOUR PROJECT
          </h2>
          <p className="text-lg opacity-80 mb-8">
            I'm currently looking for internship opportunities and interesting projects to work on.
            Let's build something amazing together!
          </p>

          <a
            href="mailto:moneshdhanasekaren@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-full text-lg font-medium hover:opacity-90 transition-opacity mb-12"
          >
            <Mail className="w-5 h-5" />
            Drop me a line
          </a>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>moneshdhanasekaren@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kanchipuram, Tamil Nadu</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            © 2024 Monesh D. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <a
            href="#home"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };
