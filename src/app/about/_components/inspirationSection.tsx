import Image from "next/image";

export const InspirationSection = () => {
  return (
    <>     
      <section className="py-5 inspired-section">
        <div className="container">

          <div className="row align-items-end g-4">
            <div className="col-md-6">
              <small className="badge-text badge-primary d-block mb-4">Present Day</small>
              <h2 className="h1 mb-0">
                Still Inspired by the World’s Stone Masters
              </h2> 
            </div>

            <div className="col-md-6">
              <p>A journey through South America, Asia, and Europe deepened our respect for ancient stonecraft — from the precision of Machu Picchu to the monumental architecture of Angkor Wat and Rome. These experiences shaped Jordan’s path from landscape construction to founding Splendour in Stone, where timeless craftsmanship meets contemporary design.</p>
            </div>  
          </div>

          <div className="w-100 mt-md-5 mt-4">
            <Image
              src="/about/hero-image.webp"
              alt="Still Inspired by the World’s Stone Masters"
              width={1400}
              height={696}
              className="h-auto w-100"
            />
          </div>
        </div>
      </section>
    </>
  );
} 