"use client";

import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#283C28"
      height={4}
      showSpinner={false}
      zIndex={9999}
      crawlSpeed={200}
      easing="ease"
    />
  );
}
