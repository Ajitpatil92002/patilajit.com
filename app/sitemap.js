export default async function sitemap() {


  const routes = ["",].map((route) => ({
    url: `${process.env.BASE_URL}/${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes,];
}
