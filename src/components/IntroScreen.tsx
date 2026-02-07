import { motion } from "framer-motion";

const IntroScreen = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-warm relative px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-handwritten text-3xl md:text-5xl text-foreground text-center leading-relaxed"
      >
        Hey… this is for you 💛
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="font-serif text-lg md:text-xl text-muted-foreground mt-6 italic text-center"
      >
        Scroll slowly, I made this with love.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-muted-foreground font-serif">scroll down</span>
        <div className="animate-scroll-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroScreen;
