"use client";

import { motion } from "framer-motion";

const stars = [
  { size: 1, left: "2%", duration: 24, delay: 0, drift: 18 },
  { size: 1.5, left: "5%", duration: 18, delay: 2, drift: 30 },
  { size: 2, left: "8%", duration: 20, delay: 4, drift: -20 },
  { size: 1, left: "12%", duration: 26, delay: 1, drift: 14 },
  { size: 2, left: "15%", duration: 21, delay: 5, drift: -16 },
  { size: 1.5, left: "18%", duration: 24, delay: 3, drift: 24 },
  { size: 1, left: "22%", duration: 20, delay: 2, drift: -12 },
  { size: 2, left: "25%", duration: 19, delay: 4, drift: 26 },
  { size: 1, left: "28%", duration: 23, delay: 1, drift: -18 },
  { size: 1.5, left: "32%", duration: 27, delay: 6, drift: 16 },
  { size: 2, left: "35%", duration: 18, delay: 0, drift: -20 },
  { size: 1, left: "38%", duration: 24, delay: 5, drift: 18 },
  { size: 1.5, left: "42%", duration: 21, delay: 2, drift: -14 },
  { size: 2, left: "45%", duration: 25, delay: 3, drift: 22 },
  { size: 1, left: "48%", duration: 20, delay: 1, drift: -16 },
  { size: 1.5, left: "52%", duration: 28, delay: 4, drift: 12 },
  { size: 2, left: "55%", duration: 22, delay: 0, drift: -24 },
  { size: 1, left: "58%", duration: 24, delay: 6, drift: 16 },
  { size: 1.5, left: "62%", duration: 19, delay: 3, drift: -18 },
  { size: 2, left: "65%", duration: 23, delay: 2, drift: 22 },
  { size: 1, left: "68%", duration: 27, delay: 5, drift: -14 },
  { size: 1.5, left: "72%", duration: 18, delay: 1, drift: 18 },
  { size: 2, left: "75%", duration: 21, delay: 4, drift: -22 },
  { size: 1, left: "78%", duration: 26, delay: 0, drift: 14 },
  { size: 1.5, left: "82%", duration: 22, delay: 3, drift: -16 },
  { size: 2, left: "85%", duration: 24, delay: 5, drift: 20 },
  { size: 1, left: "88%", duration: 20, delay: 1, drift: -12 },
  { size: 1.5, left: "92%", duration: 27, delay: 6, drift: 16 },
  { size: 2, left: "96%", duration: 19, delay: 2, drift: -18 },
];

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* deep gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.14),transparent_35%)]" />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-[-30%] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[240px]" />

      <div className="absolute right-[-10%] top-[10%] h-[800px] w-[800px] rounded-full bg-blue-500/10 blur-[220px]" />

      <div className="absolute left-[-20%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-fuchsia-500/10 blur-[220px]" />

      {/* animated nebula */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[-20%] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[220px]"
      />

      {/* orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 200,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
      />

      {/* floating stars */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            initial={{
              y: "-10vh",
              x: 0,
              opacity: 0,
            }}
            animate={{
              y: "120vh",
              x: star.drift,
              opacity: [0, 1, 1, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "linear",
              delay: star.delay,
            }}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              width: star.size * 2,
              height: star.size * 2,
              boxShadow: `
                0 0 ${star.size * 12}px rgba(255,255,255,1),
                0 0 ${star.size * 24}px rgba(125,211,252,0.7),
                0 0 ${star.size * 42}px rgba(59,130,246,0.3)
              `,
            }}
          />
        ))}
      </div>

      {/* particle field */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.06]"
      >
        <div className="h-full w-full bg-[radial-gradient(white_0.7px,transparent_0.7px)] bg-[size:30px_30px]" />
      </motion.div>

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_38%,rgba(0,0,0,0.94)_100%)]" />
    </div>
  );
}
