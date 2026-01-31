"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import BlogHeaderExtras from "./BlogHeaderExtras";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";
import './style.scss';

const posts = [
  {
    id: 1,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 2,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb2.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 3,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb3.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 4,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb4.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 5,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb5.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 6,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb6.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 7,
    slug: "post-title-7",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "09, Dec 2025",
    title: "Post Title 7",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 8,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 9,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 10,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 11,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 12,
    slug: "common-bluestone-installation-mistakes",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Common Bluestone Installation Mistakes and How to Avoid Them",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
  {
    id: 13,
    slug: "post-title-13",
    image: "/blog/blog-list-thumb1.webp",
    featured: true,
    date: "08, Dec 2025",
    title: "Post Title 13",
    excerpt: "Bluestone looks incredible, yet almost 4 in 10 projects fail early because of simple installation slip-ups. It is a costly headache no one wants! Uneven surfaces, shifting pavers and weather...",
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <PageHeader title="Blog">
        <BlogHeaderExtras />
      </PageHeader>

      <section className="py-3 py-md-4">
        <div className="container">
          <div className="blog-list">
            <div className="row">
              {visiblePosts.map((post) => (
                <div className="col-md-6" key={post.id}>
                  <article className="blog-items">
                    <figure>
                      <Link href={`/blog/${post.slug}`}> 
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={700}
                          height={460}
                          className="w-100"
                        />
                      </Link>
                    </figure>
                    <div className="px-md-3 blog-content">
                      <div className="row mt-4">
                        <div className="col-lg-5">
                          {post.featured && (
                            <small className="badge-text badge-primary d-block mb-4">Featured</small>
                          )}
                          <span className="d-none d-lg-block mt-md-4 pt-md-4">{post.date}</span>
                        </div>
                        <div className="col-lg-7">
                          <h2 className="h3 mb-2 mb-md-3"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                          <p>{post.excerpt}</p>
                          <span className="d-block d-lg-none mt-3">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />

          </div>
        </div>
      </section>
    </>
  );
}