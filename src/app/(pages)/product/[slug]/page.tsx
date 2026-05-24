import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";

import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <section className="grid min-h-screen items-center gap-14 py-24 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-[40px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <div className="mb-4 text-cyan-300">{product.resistance}</div>

          <h1 className="text-6xl font-black">{product.name}</h1>

          <p className="mt-8 text-lg leading-relaxed text-white/70">
            {product.description}
          </p>

          <div className="mt-10 grid gap-4">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl px-5 py-4 text-white/80"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-10 text-3xl font-bold text-fuchsia-300">
            {product.price}
          </div>
        </div>
      </section>
    </Container>
  );
}
