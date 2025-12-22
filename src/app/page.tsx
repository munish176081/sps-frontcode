import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="mb-3">Welcome to Our Website</h1>
          <p className="lead">
            This is a sample home page built with Next.js App Router and Bootstrap.
            Use this page as a reference to create links and images.
          </p>

          <Link href="/about" className="btn btn-primary mt-3">
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                src="/globe.svg"
                alt="Sample image"
                width={600}
                height={400}
                className="img-fluid rounded"
              />
            </div>

            <div className="col-md-6">
              <h2>How Navigation & Images Work</h2>
              <p>
                This image is loaded using <code>next/image</code> from the
                <code> public/images </code> folder. Internal navigation uses
                <code> next/link </code> for fast client-side routing.
              </p>

              <Link href="/contact" className="btn btn-outline-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}