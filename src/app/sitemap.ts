import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hippiefactory.com",
      priority: 1,
    },
    {
      url: "https://hippiefactory.com/product",
      priority: 0.9,
    },
    {
      url: "https://hippiefactory.com/become-reseller",
      priority: 0.8,
    },
    {
      url: "https://hippiefactory.com/contact",
      priority: 0.7,
    },
  ];
}