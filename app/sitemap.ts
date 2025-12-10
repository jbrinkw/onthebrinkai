import type { MetadataRoute } from "next";

const siteUrl = "https://www.onthebrink.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/portfolio`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/resume`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}

