"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10K+",
    label: "Active Users",
  },
  {
    value: "5000+",
    label: "Daily Builds",
  },
  {
    value: "99%",
    label: "Satisfaction",
  },
  {
    value: "Handmade",
    label: "Precision Quality",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-cyan-300/70 sm:text-xs">
            <div className="h-px w-8 bg-cyan-400/40" />
            HFX Metrics
            <div className="h-px w-8 bg-cyan-400/40" />
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            trusted by
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              modern builders
            </span>
          </h2>
        </motion.div>

        {/* stats layout */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.08] to-transparent" />

                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
              </div>

              {/* corner accents */}
              <div className="absolute left-0 top-0 h-14 w-14 border-l border-t border-cyan-400/30" />

              <div className="absolute bottom-0 right-0 h-14 w-14 border-b border-r border-fuchsia-400/20" />

              <div className="relative z-10">
                {/* top number */}
                <div className="flex items-start justify-between">
                  <h3 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </h3>

                  <span className="text-[10px] tracking-[0.35em] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                {/* label */}
                <p className="mt-8 text-sm uppercase tracking-[0.3em] text-cyan-200/75">
                  {stat.label}
                </p>

                {/* divider */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
