"use client";

import { motion } from "framer-motion";
import { Cloud, Flame, Zap } from "lucide-react";

const experiences = [
  {
    title: "Uap Lebih Padat",
    description:
      "Asap lebih tebal dengan airflow yang tetap nyaman untuk dipakai harian.",
    icon: Cloud,
  },
  {
    title: "Rasa Lebih Keluar",
    description:
      "Bikin rasa liquid lebih terasa dan tetap clean di setiap tarikan.",
    icon: Flame,
  },
  {
    title: "Ramp-Up Cepat",
    description: "Respon firing lebih cepat dan stabil saat digunakan.",
    icon: Zap,
  },
];

export default function FlavorExperience() {
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
            Hippie Factory
            <div className="h-px w-8 bg-cyan-400/40" />
          </span>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Dibuat Sepenuh Hati
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            Coil handmade dengan fokus pada rasa, asap, dan performa yang stabil
            untuk daily vaping.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
                style={{
                  clipPath:
                    "polygon(0 18px,18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%)",
                }}
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-cyan-400/[0.05]" />
                </div>

                {/* borders */}
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

                {/* glow orb */}
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

                {/* content */}
                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/15 bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.description}
                  </p>

                  {/* bottom accent */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
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
