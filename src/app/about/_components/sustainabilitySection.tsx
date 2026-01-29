import Image from "next/image";

export const SustainabilitySection = () => {
  return (
    <>     
      <section className="py-5 sustain-sec">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-md-6">
              <small className="badge-text badge-primary d-block mb-4">Sustainability + Us</small>
              <h2 className="h2 mb-0">
                Our Stone Is Responsibly Sourced And Crafted To Minimise Impact
                And Maximise Longevity.
              </h2>
            </div>

            <div className="col-md-6">
              <figure className="m-0">
                <Image
                  src="/about/sustain-pic.webp"
                  alt="Sustainable stone home"
                  width={720}
                  height={554}
                  className="h-auto w-100"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 