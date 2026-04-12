export async function getBlogs() {
  const res = await fetch(
    "https://blog.pups4sale.com.au/wp-json/wp/v2/posts?_embed",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const text = await res.text();

  try {
    const posts = JSON.parse(text);

    return posts.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      slug: post.slug,
      image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
    }));

  } catch (e) {
    console.error("API returned HTML instead of JSON:", text);
    throw e;
  }
}