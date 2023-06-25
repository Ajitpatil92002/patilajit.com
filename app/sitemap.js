import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allPosts.map((post) => {
    return post.slug;
  });

  const routes = ["/", "/blog",...blogs].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes];
}
