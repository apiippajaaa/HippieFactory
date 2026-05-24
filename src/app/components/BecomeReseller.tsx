"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BecomeReseller() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* title */}
          <h2 className="text-5xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
            become reseller
          </h2>

          {/* accent line */}
          <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          {/* description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 sm:text-xl">
            Join our reseller program and start building your own vape business
            with premium handcrafted coils.
          </p>

          {/* button */}
          <Link
            href="/become-creator"
            className="
              group relative mt-14 inline-flex items-center gap-4
              text-base font-medium uppercase tracking-[0.3em]
              text-white/80 transition duration-300
              hover:text-cyan-200
            "
          >
            <span>Apply Now</span>

            <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />

            {/* underline effect */}
            <span className="absolute -bottom-3 left-0 h-px w-full scale-x-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition duration-500 group-hover:scale-x-100" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
