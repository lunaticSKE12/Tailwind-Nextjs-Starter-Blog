import { MetadataRoute } from 'next';
import siteMetadata from '@/data/siteMetadata';

/**
 * The function returns the configuration for the robots.txt file, including the rules for user agents
 * and the sitemap URL.
 * @returns an object of type `MetadataRoute.Robots`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
    host: siteMetadata.siteUrl,
  };
}
