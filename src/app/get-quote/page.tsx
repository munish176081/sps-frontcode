import Button from '@/components/ui/Button';
import Link from 'next/link';
import '../contact/style.scss';
import './style.scss';
import Image from 'next/image';

export default function GetQuotePage() {
  return (
    <>
      <section className="page-header mt-0 mt-md-5 mb- pt-4 pt-md-5 pb-md-4">
        <div className="container">
          <div className="row align-items-start g-3">

            <div className="col-12">
              <h1 className="h1 page-title mb-0">Have you got project in mind?</h1>
              <p className="page-subtitle">Our Friendly Team Are Ready To Provide You With A Prompt Quote.</p>
            </div>

          </div>
        </div>
      </section>

      <hr />

      <section className="project-overview">
        <div className="container">
          <div className="d-block">
            <figure className="my-4">
              <Image
                src="/quote/office-pic.webp"
                alt="Quote"
                width={1024}
                height={576}
                className="w-100 h-auto"
                priority
              />
            </figure>

            <div className="row py-md-4 py-3">
              <div className="col-lg-2">
                <small className="badge-text badge-primary d-block mb-4">Overview</small>
              </div>

              <div className="col-lg-6">
                <h3 className="h3 mb-0">For Melbourne Based Clients, We Offer A Free No Obligation On-site Measure And Quote.</h3>
              </div>

              <div className="col-lg-4">
                <ul className="list-quote mt-3 mt-md-0 mb-0">
                  <li>Feature walls</li>
                  <li>Stone retaining walls</li>
                  <li>Piers, gates and fencing</li>
                  <li>Fireplaces</li>
                  <li>Blade walls</li>
                  <li>Alfresco paving, pools, steps, paths & internal floor coverings</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <hr />

      <section className="py-md-4 py-3 quote-text">
        <div className="container">
          <div className="d-flex flex-column justify-content-center text-start text-md-center">
            <p className='mb-0'>Our Expert Team Provide Samples And Brochures As Well As Design And Stone Choice Advice.<br />
              Don’t Hesiate To Fill Out The Form Below So We Can Help Design And Install Your Stone Feature.<br />
              For Our Interstate Friends, Please Send Any Floor Plans Or Ideas, So Our Expert Team Can Provide You With A Prompt Free Quote.</p>
            <p className='text-center'><span className="h6">Please Send Here: <a href="mailto:info@splendourinstone.com">info@splendourinstone.com</a></span><br/>
              <span className="text-base">We Look Forward To Receiving Your Enquiry Soon</span></p>
          </div>
        </div>
      </section>

      <hr />

      <section className="py-5 contact-form-sec">
        <div className="container">
          <div className="row">

            <div className="col-lg-5">
              <small className="badge-text badge-primary d-block mb-4">Contact form</small>
              <h2 className="h2">Send us a<br className='d-none d-md-inline' />message</h2>
            </div>

            {/* FORM */}
            <div className="col-lg-7">
              <form className="row g-4 contact-form">
                <div className="col-12 mb-2">
                  <label>Name</label>
                  <div className="position-relative">
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>

                <div className="col-12 mb-2">
                  <label>Email</label>
                  <div className="position-relative">
                    <input type="email" className="form-control" placeholder="" />
                  </div>
                </div>

                <div className="col-12 mb-2">
                  <label>Phone</label>
                  <div className="position-relative">
                    <input type="tel" className="form-control" placeholder="" />
                  </div>
                </div>

                <div className="col-12 mb-2">
                  <label>Write your message</label>
                  <div className="position-relative">
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="col-12 d-flex align-items-center gap-2 mb-3">
                  <div className="checkbox-container">
                    <label className="checkbox">
                      <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                      <span className="checkbox__symbol">
                        <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1">
                          <path d="M4 14l8 7L24 7"></path>
                        </svg>
                      </span>
                      <span className="checkbox__textwrapper">I agree to the <Link href="#">Privacy Policy</Link></span>
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <Button rounded size="md" label="Submit" variant="black" />
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}