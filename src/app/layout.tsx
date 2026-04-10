import type { Metadata } from "next";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.scss";
import "@/styles/faq.scss";
import TopLoader from "@/components/ui/TopLoader";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "react-hot-toast";
import ModalProvider from "@/components/modals/ModalProvider";
import TopAnnouncementBar from "@/components/ui/TopAnnouncementBar";

const ztNature = localFont({
  src: [
    {
      path: "../../public/fonts/ZTNature-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZTNature-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZTNature-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZTNature-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZTNature-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZTNature-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-zt-nature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wall Cladding Melbourne | Stone Cladding | Splendour in Stone",
  description:
    "Melbourne's Splendour in Stone completely transforms the look & feel of ageing walls with our stone wall cladding products. Explore our beautiful range today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ztNature.variable}>
      <body>
        <QueryProvider>
          <ModalProvider>
            <TopLoader />
            <TopAnnouncementBar />
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
