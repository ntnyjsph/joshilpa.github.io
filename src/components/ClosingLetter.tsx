import { motion } from "framer-motion";

const letterLines = [
  "My dearest,",
  "",
  "On this day, I just want you to know —",
  "you are the most extraordinary person I've ever met.",
  "",
  "You make ordinary moments feel like magic.",
  "You make me want to be a better person,",
  "every single day.",
  "",
  "I hope this birthday brings you",
  "all the warmth and joy you give to others.",
  "",
  "Thank you for being you.",
  "Thank you for being mine.",
  "",
  "Happy Birthday, my love. 🤍",
  "",
  "Forever yours."
];

const ClosingLetter = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-blush px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
        className="bg-warm-parchment rounded-lg p-8 md:p-12 max-w-lg w-full letter-shadow relative"
      >
        {/* Subtle paper texture line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-warm-gold-light to-transparent rounded-t-lg" />

        <div className="space-y-1">
          {letterLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12 }}
              className={`font-handwritten text-xl md:text-2xl text-foreground leading-relaxed text-glow-soft ${
                line === "" ? "h-4" : ""
              } ${i === 0 ? "text-2xl md:text-3xl" : ""} ${
                i === letterLines.length - 1 ? "pt-4 text-right" : ""
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ClosingLetter;
