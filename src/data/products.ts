import { Product } from "@/types/product";

export const products: Product[] = [
  // =========================
  // RDA SERIES
  // =========================
  {
    id: 1,
    name: "Alien Dual Core",
    slug: "alien-dual-core-rda",
    description:
      "Memberikan rasa yang smooth dengan panas yang seimbang untuk performa harian RDA.",
    image: [
      "/images/product/alien-dual-core-rda/1.webp",
    ],
    resistance: "0.18Ω",
    compatibility: "RDA",
    diameter: "3MM",
    price: "Rp 25.000",
    features: [
      "Diameter dalam 3MM",
      "Build dual core",
      "Rasa lebih padat",
      "Ramp-up cepat",
    ],
  },

  // =========================
  // AIO SERIES
  // =========================
  {
    id: 2,
    name: "Alien Dual Core AIO",
    slug: "alien-dual-core-aio",
    description:
      "Tarikan halus dengan rasa yang tetap maksimal dan cocok untuk penggunaan AIO harian.",
    image: [
      "/images/product/alien-dual-core-aio/1.webp",
    ],
    resistance: "0.30Ω",
    compatibility: "AIO",
    diameter: "2.5MM",
    price: "Rp 25.000",
    features: [
      "Diameter dalam 2.5MM",
      "Respons firing cepat",
      "Rasa tetap clean",
      "Cocok untuk device AIO",
    ],
  },
];