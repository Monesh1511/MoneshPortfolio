import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, HeartHandshake } from "lucide-react";
import { CONTACT_GMAIL_COMPOSE_URL } from "@/lib/contact";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto rounded-[2rem] border border-border bg-primary text-primary-foreground p-10 md:p-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] opacity-75 mb-4">Let&apos;s Build Together</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Need an ML + Full-Stack Builder
            <br />
            for your next idea?
          </h2>
          <p className="text-lg opacity-85 mb-8 max-w-2xl mx-auto">
            I am actively looking for internship opportunities and collaborative projects where I can contribute with clean engineering, strong learning speed, and positive teamwork.
          </p>

          <a
            href={CONTACT_GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-full text-lg font-semibold hover:opacity-90 transition-opacity mb-10"
          >
            <Mail className="w-5 h-5" />
            moneshdhanasekaren@gmail.com
          </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm opacity-85">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>moneshdhanasekaren@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kanchipuram, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4" />
              <span>Built on kindness and consistency</span>
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
            © 2026 Monesh D. Built with focus, discipline, and curiosity.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Monesh1511"
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
