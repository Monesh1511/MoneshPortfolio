import { motion } from "framer-motion";
import { CONTACT_GMAIL_COMPOSE_URL } from "@/lib/contact";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Journey" },
  {
    href: CONTACT_GMAIL_COMPOSE_URL,
    label: "Contact",
  },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 text-foreground">
          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold grid place-items-center">M</span>
          <span className="font-display text-2xl leading-none">Monesh D</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.label === "Contact" ? "_blank" : undefined}
                rel={link.label === "Contact" ? "noopener noreferrer" : undefined}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </motion.header>
  );
};

export default Header;
