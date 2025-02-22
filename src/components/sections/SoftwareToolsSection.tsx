
import { motion } from "framer-motion";

interface SoftwareToolsSectionProps {
  softwareTools: any[];
  fadeInUp: any;
  staggerContainer: any;
  cardVariants: any;
  backgroundVariants: any;
}

export const SoftwareToolsSection = ({ 
  softwareTools, 
  fadeInUp, 
  staggerContainer,
  cardVariants,
  backgroundVariants
}: SoftwareToolsSectionProps) => {
  return (
    <section className="py-20 neo-blur">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Software & Tools</h2>
          <p className="text-muted-foreground">
            Proficient in industry-standard software and development tools
          </p>
        </motion.div>

        {softwareTools.map((category, index) => (
          <motion.div
            key={index}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {category.tools.map((tool: any, idx: number) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 p-2 glass rounded-xl flex items-center justify-center">
                  <img src={tool.image} alt={tool.name} className="w-10 h-10 object-contain" />
                </div>
                <span className="text-sm text-center font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
