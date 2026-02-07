import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
  drift: number;
}

const emojis = ["♥", "💛", "💗", "✨", "💕", "🤍", "♥", "💗"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 18 + Math.random() * 22,
      duration: 10 + Math.random() * 14,
      delay: Math.random() * 12,
      emoji: emojis[i % emojis.length],
      drift: -30 + Math.random() * 60,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            animationIterationCount: "infinite",
            ["--drift" as string]: `${h.drift}px`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
