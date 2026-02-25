import { motion } from "framer-motion";

const storyLines = [
  "It started in a gaming app—",
  "no voice chat or \"Join Room\" request could have prepared me",
  "for the fact that I was meeting my Forever.",
  "Back then, you were just a teammate;",
  "little did I know you'd end up being",
  "the \"Final Boss\" of my heart. 💛",
];

const OurStory = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-blush px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-handwritten text-4xl md:text-5xl text-foreground mb-16 text-center"
      >
        Our Story 🤍
      </motion.h2>

      <div className="max-w-lg space-y-6">
        {storyLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed text-center italic"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
