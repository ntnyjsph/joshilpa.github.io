import { motion } from "framer-motion";

const EmotionalPause = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-warm relative overflow-hidden">
      {/* Soft floating elements */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute animate-pulse-soft"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 28}%`,
            fontSize: `${18 + i * 4}px`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.65 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: i * 0.3 }}
        >
          {["💗", "✨", "🤍", "💛", "✦", "💕", "♥", "✨"][i]}
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
