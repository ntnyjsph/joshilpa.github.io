import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";

const photos = [
  { src: memory1, caption: "That golden evening on the beach 🌅" },
  { src: memory2, caption: "Our favorite café, our favorite laughs ☕" },
  { src: memory3, caption: "Watching the world from above, together 🌇" },
  { src: memory4, caption: "You, me, and a little rain 🌧️" },
  { src: memory5, caption: "Cooking chaos and so much love 🍳" },
];

const PhotoGallery = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < photos.length) setCurrent(idx);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-warm px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-handwritten text-4xl md:text-5xl text-foreground mb-12 text-center"
      >
        Our Memories 📸
      </motion.h2>

      <div className="relative w-full max-w-sm md:max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -60, rotate: -2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-primary-foreground rounded-sm p-3 pb-16 polaroid-shadow relative"
          >
            <img
              src={photos[current].src}
              alt={photos[current].caption}
              className="w-full aspect-square object-cover rounded-sm"
            />
            <p className="absolute bottom-4 left-0 right-0 text-center font-handwritten text-lg md:text-xl text-foreground px-4">
              {photos[current].caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 font-serif text-2xl"
          >
            ←
          </button>
          <div className="flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(current + 1)}
            disabled={current === photos.length - 1}
            className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 font-serif text-2xl"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
