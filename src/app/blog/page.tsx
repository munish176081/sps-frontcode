"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import BlogHeaderExtras from "./BlogHeaderExtras";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";
import "./style.scss";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import GridCardSkeleton from "@/components/ui/GridCardSkeleton";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [currentPage, setCurrentPage] = useState(1);
 const { data: posts = [], isLoading, isFetching } = useBlogPosts(debouncedSearch);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(start, start + POSTS_PER_PAGE);
  return (
    <>
      <PageHeader title="Blog">
        <BlogHeaderExtras search={search} setSearch={setSearch} />
      </PageHeader>

      <section className="py-3 py-md-4">
        <div className="container">
          <div className="blog-list">
            <div className="row">
              {isLoading || isFetching ? (
                <GridCardSkeleton />
              ) : (
                visiblePosts.map((post: any) => (
                  <div className="col-md-6" key={post.id}>
                    <article className="blog-items">
                      <figure>
                        <Link href={`/blog/${post.slug}`}>
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={700}
                            height={460}
                            className="w-100 h-auto"
                          />
                        </Link>
                      </figure>

                      <div className="px-md-3 blog-content">
                        <div className="row mt-4">
                          <div className="col-lg-5">
                            <span className="d-none d-lg-block mt-md-4 pt-md-4">
                              {post.date}
                            </span>
                          </div>

                          <div className="col-lg-7">
                            <h2 className="h3 mb-2 mb-md-3">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h2>

                            <p>{post.excerpt}</p>

                            <span className="d-block d-lg-none mt-3">
                              {post.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))
              )}
            </div>

            {!isLoading && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
