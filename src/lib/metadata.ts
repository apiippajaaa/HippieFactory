import { Metadata } from "next";

export function createMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://hippiefactory.com"),
    openGraph: {
      title,
      description,
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}