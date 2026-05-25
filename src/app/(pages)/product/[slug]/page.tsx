// app/(pages)/product/[slug]/page.tsx

import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";

import { products } from "@/data/products";
import ProductGallery from "./components/ProductGallery";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden text-white">
      <Container>
        <section className="relative grid min-h-screen items-center gap-16 py-24 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <ProductGallery images={product.image} alt={product.name} />
          </div>

          <div className="relative">
            <div
              className="
                inline-flex items-center gap-3
                rounded-full border border-white/10
                bg-white/3
                px-5 py-2.5
                backdrop-blur-xl
              "
            >
              <div className="h-2 w-2 rounded-full bg-white/60" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Hippie Factory
              </span>
            </div>

            {/* title */}
            <h1
              className="
                mt-8 text-5xl font-black uppercase
                leading-[0.9]
                tracking-tighter
                text-white
                sm:text-6xl
              "
            >
              {product.name}
            </h1>

            {/* desc */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              {product.description}
            </p>

            {/* specs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <div
                className="
                  rounded-full border border-white/10
                  bg-white/3
                  px-5 py-3
                  backdrop-blur-xl
                "
              >
                <span className="text-xs uppercase tracking-[0.25em] text-white/55">
                  {product.compatibility}
                </span>
              </div>

              <div
                className="
                  rounded-full border border-white/10
                  bg-white/3
                  px-5 py-3
                  backdrop-blur-xl
                "
              >
                <span className="text-xs uppercase tracking-[0.25em] text-white/55">
                  {product.resistance}
                </span>
              </div>

              <div
                className="
                  rounded-full border border-white/10
                  bg-white/3
                  px-5 py-3
                  backdrop-blur-xl
                "
              >
                <span className="text-xs uppercase tracking-[0.25em] text-white/55">
                  {product.diameter}
                </span>
              </div>
            </div>

            {/* features */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    rounded-2xl border border-white/10
                    bg-white/3
                    px-5 py-4
                    backdrop-blur-xl
                  "
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-white/65">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* bottom */}
            <div className="mt-14 flex items-end justify-between gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Price
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
                  {product.price}
                </h2>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="
                  rounded-2xl border border-white/10
                  bg-white/4
                  px-7 py-4
                  text-sm font-medium uppercase
                  tracking-[0.25em]
                  text-white/80
                  transition duration-300
                  hover:bg-white/8
                "
                  >
                    Order Now
                  </button>
                </DialogTrigger>

                <DialogContent className="border-blue-500/20 bg-black/95 text-white sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Choose Purchase Method</DialogTitle>

                    <DialogDescription>
                      Select your preferred platform.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-3">
                    <Button asChild>
                      <a
                        href="https://wa.me/628123456789"
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Button>

                    <Button asChild variant="secondary">
                      <a
                        href="https://shopee.co.id"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Shopee
                      </a>
                    </Button>
                  </div>

                  {/* <DialogClose asChild>
                    <Button variant="ghost">Close</Button>
                  </DialogClose> */}
                </DialogContent>
              </Dialog>

              {/* <button
                className="
                  rounded-2xl border border-white/10
                  bg-white/4
                  px-7 py-4
                  text-sm font-medium uppercase
                  tracking-[0.25em]
                  text-white/80
                  transition duration-300
                  hover:bg-white/8
                "
              >
                Order Now
              </button> */}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
