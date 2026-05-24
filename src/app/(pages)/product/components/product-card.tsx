// components/product/product-card.tsx

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const type = product.compatibility.includes("RDA") ? "RDA" : "AIO";

  // hero image = first image
  const heroImage = Array.isArray(product.image)
    ? product.image[0]
    : product.image;

  return (
    <Link href={`/product/${product.slug}`} className="group relative block">
      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]">
        {/* glow */}
        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />
        </div>

        {/* image */}
        <div className="relative aspect-[0.9] overflow-hidden">
          <Image
            src={heroImage}
            alt={product.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

          {/* badge */}
          <div
            className="
              absolute right-5 top-5
              rounded-full border border-white/10
              bg-black/40
              px-4 py-2
              backdrop-blur-xl
            "
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">
              {type}
            </span>
          </div>

          {/* content */}
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h1 className="text-xl font-black uppercase text-white">
              {product.name}
            </h1>

            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                {product.resistance}
              </p>

              <span
                className="
                  whitespace-nowrap
                  text-sm font-medium
                  uppercase tracking-[0.18em]
                  text-white/70
                "
              >
                {product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
