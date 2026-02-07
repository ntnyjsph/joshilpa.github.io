import { motion } from "framer-motion";

const EmotionalPause = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-warm relative overflow-hidden">
      {/* Soft floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-warm-blush-light animate-pulse-soft"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            fontSize: `${14 + i * 4}px`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: i * 0.3 }}
        >
          {i % 2 === 0 ? "♥" : "✦"}
        </motion.span>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="font-handwritten text-2xl md:text-3xl text-muted-foreground text-center px-6"
      >
        … take a breath …
      </motion.p>
    </section>
  );
};

export default EmotionalPause;
