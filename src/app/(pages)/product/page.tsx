// app/product/page.tsx

import ProductCard from "@/app/(pages)/product/components/product-card";
import Container from "@/components/layout/Container";

import { products } from "@/data/products";

export default function ProductPage() {
  return (
    <Container>
      <section className="relative overflow-hidden py-24">
        <div className="relative">
          {/* heading */}
          <div className="flex flex-col items-center text-center">
            {/* title */}
            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              PRODUK HIPPIE
            </h1>

            {/* description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              Coil handmade dengan fokus pada rasa yang lebih keluar, performa
              stabil, dan kualitas untuk penggunaan harian.
            </p>
          </div>

          {/* divider */}
          <div className="mt-14 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

          {/* products */}
          <div className="mt-16 flex flex-wrap justify-center gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full max-w-[290px] sm:w-[290px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
