"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Hippie Factory coils different?",
    answer:
      "Our coils are handcrafted for cleaner flavor, faster ramp-up, and smoother firing consistency designed for daily performance.",
  },
  {
    question: "Are the coils suitable for beginners?",
    answer:
      "Yes. Hippie Factory coils are designed to be reliable and easy to use, whether you're new to rebuildables or an experienced builder.",
  },
  {
    question: "Which devices are compatible?",
    answer:
      "Most of our coils are compatible with popular RDA and AIO setups. Compatibility details are listed on every product page.",
  },
  {
    question: "How long do the coils last?",
    answer:
      "Lifespan depends on usage and liquid type, but with proper maintenance our handcrafted coils are built for long-term durability.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. We provide worldwide shipping so builders everywhere can experience Hippie Factory performance.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 text-center md:mb-20"
        >
          <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-cyan-300/70 sm:text-xs">
            <div className="h-px w-8 bg-cyan-400/40" />
            FAQ
            <div className="h-px w-8 bg-cyan-400/40" />
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl">
            frequently asked
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
        </motion.div>

        {/* accordion */}
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl
                "
                style={{
                  clipPath:
                    "polygon(0 18px,18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%)",
                }}
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                  <div className="flex w-full items-center justify-between gap-6">
                    <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                  <div className="mb-5 h-px w-full bg-linear-to-r from-cyan-400/30 via-white/10 to-transparent" />

                  <p className="max-w-3xl text-sm leading-7 text-white/45 sm:text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
