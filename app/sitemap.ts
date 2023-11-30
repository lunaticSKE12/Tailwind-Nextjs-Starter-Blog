import { MetadataRoute } from 'next';
import { allBlogs } from 'contentlayer/generated';
import siteMetadata from '@/data/siteMetadata';

/**
 * The function generates a sitemap by filtering out draft blog posts and creating an array of routes
 * with their corresponding URLs and last modified dates.
 * @returns an array of objects representing the routes for the sitemap. Each object has two
 * properties: `url` and `lastModified`. The `url` property is a combination of the `siteUrl` and the
 * route name, and the `lastModified` property is the date of the last modification for that route.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  /* The code is filtering out any blog posts that have the `draft` property set to `true`. It then maps
over the remaining blog posts and creates an array of objects. Each object represents a blog post
and contains two properties: `url` and `lastModified`. The `url` property is constructed by
combining the `siteUrl` with the `path` property of the blog post. The `lastModified` property is
set to the `lastmod` property of the blog post if it exists, otherwise it is set to the `date`
property of the blog post. */
  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }));

  /* The code is creating an array of routes for the sitemap. It uses the `map` function to iterate over
an array of route names (`'', 'blog', 'projects', 'tags'`) and for each route, it creates an object
with two properties: `url` and `lastModified`. */
  const routes = ['', 'blog', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogRoutes];
}
