"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/app/(pages)/product/components/product-card";

export default function Product() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-16">
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
              Hippie Factory
              <div className="h-px w-8 bg-cyan-400/40" />
            </span>

            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl">
              PRODUCT
            </h2>
          </motion.div>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
