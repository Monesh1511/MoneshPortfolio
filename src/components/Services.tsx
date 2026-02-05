import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Machine Learning",
    description: "Building predictive models using Python, scikit-learn, and deep learning frameworks for real-world applications.",
  },
  {
    number: "02",
    title: "Computer Vision",
    description: "Developing image recognition and processing systems using OpenCV, NumPy, and advanced CV techniques.",
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Creating robust server-side applications with Java, databases, and API integrations.",
  },
  {
    number: "04",
    title: "Data Analysis",
    description: "Analyzing complex datasets using Pandas, Matplotlib, and SQL to derive actionable insights.",
  },
];

const Services = () => {
  return (
    <section className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          I CAN HELP YOU WITH
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pt-12 border-t border-border"
            >
              <span className="absolute top-0 left-0 -translate-y-1/2 text-6xl font-bold text-muted/50 font-display italic">
                {service.number}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
