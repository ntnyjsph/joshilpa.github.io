import { motion } from "framer-motion";

const storyLines = [
  "Do you remember that first evening?",
  "We sat on that old bench, talking about everything and nothing.",
  "The world felt so quiet around us…",
  "like it was giving us space to just be.",
  "You laughed at something silly I said,",
  "and I knew right then — I was home.",
  "Every day since, you've been my favorite story.",
  "And I never want it to end. 💛",
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
