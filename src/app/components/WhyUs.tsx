"use client";

import { motion } from "framer-motion";
import { Flame, Shield, Skull, Zap } from "lucide-react";

const features = [
  {
    title: "Maximum Flavor",
    description:
      "Engineered to deliver richer flavor accuracy with dense, satisfying vapor production.",
    icon: Flame,
  },
  {
    title: "Consistent Performance",
    description:
      "Stable resistance and smooth firing performance built for reliable everyday sessions.",
    icon: Shield,
  },
  {
    title: "Instant Ramp-Up",
    description:
      "Fast heat response that activates instantly for cleaner hits and smoother power delivery.",
    icon: Zap,
  },
  {
    title: "Handcrafted Durability",
    description:
      "Precision-built with premium materials for longer lifespan and dependable quality.",
    icon: Skull,
  },
];

export default function WhyUsNebula() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-24"
        >
          <span className="mb-5 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-cyan-300/70 sm:text-xs">
            <div className="h-px w-8 bg-cyan-400/40" />
            Why Hippie Factory
            <div className="h-px w-8 bg-cyan-400/40" />
          </span>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Forged in
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              deep space
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
            Dark futuristic craftsmanship fused with precision coil engineering
            for modern flavor hunters.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* glass layer */}
                <div
                  className="relative overflow-hidden border border-cyan-400/10 bg-white/[0.02] backdrop-blur-2xl p-8"
                  style={{
                    clipPath:
                      "polygon(0 16px,16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%)",
                  }}
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-cyan-400/[0.05]" />
                  </div>

                  {/* borders */}
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                  {/* floating orb */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

                  {/* number */}
                  <span className="absolute right-6 top-5 text-4xl font-black text-white/[0.04]">
                    0{index + 1}
                  </span>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* icon */}
                    <div className="relative mb-7 flex h-16 w-16 items-center justify-center">
                      {/* pulse ring */}
                      <div className="absolute inset-0 rounded-full border border-cyan-400/20" />

                      <div className="absolute inset-2 rounded-full border border-cyan-300/10" />

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/45">
                      {feature.description}
                    </p>
                  </div>

                  {/* bottom chip */}
                  <div className="mt-8 flex justify-center">
                    <div className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-200/40">
                      HFX-0{index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
