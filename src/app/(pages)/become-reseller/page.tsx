"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Boxes, Flame, ShieldCheck, Wallet } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Margin Menarik",
  },
  {
    icon: Boxes,
    title: "Produk Berkualitas",
  },
  {
    icon: Flame,
    title: "Rilis Produk Eksklusif",
  },
  {
    icon: ShieldCheck,
    title: "Brand Terpercaya",
  },
];

export default function BecomeResellerPage() {
  const whatsappLink =
    "https://wa.me/62812345678910?text=Halo%20Hippie%20Factory,%20saya%20ingin%20bergabung%20menjadi%20reseller.";

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.35em] text-white/40">
              Program Reseller
            </span>

            <h1 className="mt-6 text-4xl font-black uppercase text-white sm:text-6xl lg:text-6xl">
              mulai gabung
              <span className="block text-7xl text-yellow-400">
                bersama kami
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
              Gabung menjadi reseller Hippie Factory dan jual coil handmade
              dengan kualitas terbaik untuk daily vaping.
            </p>

            <div className="mt-12">
              <Link
                href={whatsappLink}
                target="_blank"
                className="
                  group inline-flex items-center gap-3
                  rounded-2xl border border-white/10
                  bg-white/[0.04]
                  px-7 py-4
                  text-sm font-medium uppercase tracking-[0.25em]
                  text-white transition-all duration-300
                  hover:border-white/20
                  hover:bg-white/[0.06]
                "
              >
                Gabung Sekarang
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              grid gap-4
              rounded-[32px]
              border border-white/10
              bg-white/[0.02]
              p-6 backdrop-blur-2xl
            "
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    flex items-center gap-4
                    rounded-2xl
                    border border-white/5
                    bg-white/[0.02]
                    px-5 py-5
                    transition-all duration-300
                    hover:bg-white/[0.04]
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                    "
                  >
                    <Icon className="h-5 w-5 text-white/70" />
                  </div>

                  <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
