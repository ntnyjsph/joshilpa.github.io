import { motion } from "framer-motion";

const BirthdayWish = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-blush px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-lg md:text-xl text-muted-foreground italic block mb-4"
        >
          Today is your day ✨
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
          className="font-handwritten text-7xl md:text-9xl lg:text-[10rem] text-gradient-warm text-glow leading-tight"
        >
          Happy Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-serif text-xl md:text-2xl text-foreground mt-10 max-w-md mx-auto leading-relaxed text-glow-soft"
        >
          To the most beautiful soul I know.
          <br />
          This world shines brighter because you're in it.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BirthdayWish;
