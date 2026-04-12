import { useQuery } from "@tanstack/react-query";

export function useBlogPosts(search: string) {
  return useQuery({
    queryKey: ["blog-posts", search],
    queryFn: async () => {

      const url = search
        ? `https://blog.pups4sale.com.au/wp-json/wp/v2/posts?search=${search}&per_page=50`
        : `https://blog.pups4sale.com.au/wp-json/wp/v2/posts?per_page=50`;

      const res = await fetch(url);
      const data = await res.json();

      return data.map((post: any) => ({
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
        date: new Date(post.date).toLocaleDateString("en-AU", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        image: "/blog/blog-list-thumb1.webp",
      }));
    },
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
}