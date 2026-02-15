"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BackToPage() {
  const router = useRouter();

  return (
    <Link
      href="#"
      onClick={() => router.back()}
      className="flex items-center gap-2 hover:underline"
    >
      <svg
        className="me-4"
        width="31"
        height="14"
        viewBox="0 0 31 14"
        fill="none"
      >
        <path
          d="M6.94531 12.5L1.38976 6.94445L6.94531 1.38889"
          stroke="#757575"
          strokeWidth="2.77778"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.167 6.94443L1.38921 6.94443"
          stroke="#757575"
          strokeWidth="2.77778"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to collections
    </Link>
  );
}
