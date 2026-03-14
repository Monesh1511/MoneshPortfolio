import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient relative overflow-hidden pt-20">
      {/* Peach glow effect */}
      <div className="absolute inset-0 peach-glow opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Script greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display italic text-4xl md:text-6xl text-foreground mb-6"
          >
            Hey, there
          </motion.p>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-peach to-peach-glow blur-2xl opacity-50" />
            <img
              src={profileImage}
              alt="Monesh D"
              className="relative w-full h-full object-cover rounded-full shadow-2xl"
            />
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              I AM<br className="md:hidden" /> MONESH
            </h1>
            <div className="text-left">
              <p className="text-lg md:text-xl font-semibold text-foreground">AI & ML</p>
              <p className="text-lg md:text-xl font-semibold text-foreground">ENGINEER</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-md text-muted-foreground mb-8"
          >
            Specialized in Machine Learning, Computer Vision, and Backend Development.
            Building intelligent solutions that work in the real world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 border border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
