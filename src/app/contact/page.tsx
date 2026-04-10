import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import LeadForm from "@/components/forms/LeadForm";
import "./style.scss";
import { formSchemas } from "@/components/modals/formSchemas";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="py-5 contact-info-block">
        <div className="container">
          <div className="row flex-lg-row flex-column-reverse g-5">
            <div className="col-lg-5">
              <Image
                src="/contact/map-pic.webp"
                alt="Australia Map"
                width={690}
                height={554}
                className="h-auto w-100 border"
              />
            </div>

            {/* CONTACT INFO */}
            <div className="col-lg-7">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="title-group">
                  <h2 className="h1 mb-2">Australia</h2>
                  <p className="mb-3">
                    10/21 Cook rd Mitcham,
                    <br />
                    Melbourne, Victoria 3132 Australia
                  </p>
                </div>

                <div className="address-group">
                  <div className="mb-3">
                    <small className="text-uppercase text-uppercase d-block">
                      Local Time
                    </small>
                    <span>15:02:46 PM</span>
                  </div>

                  <div className="mb-3">
                    <small className="text-uppercase text-uppercase d-block">
                      Phone
                    </small>
                    <span>03 9873 4941</span>
                  </div>

                  <div>
                    <small className="text-uppercase text-uppercase d-block">
                      Email
                    </small>
                    <Link href="mailto:info@splendourinstone.com">
                      info@splendourinstone.com
                      <em className="icon ms-3">
                        <svg
                          width="19"
                          height="16"
                          viewBox="0 0 19 16"
                          fill="none"
                        >
                          <path
                            d="M0.499242 7.68816L18.0703 7.68816M18.0703 7.68816L10.8821 0.5M18.0703 7.68816L10.8821 14.8763"
                            stroke="#0E0E0E"
                            strokeLinecap="round"
                            strokeLinejoin="bevel"
                          />
                        </svg>
                      </em>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="py-4 opening-hours-sec">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-xl-3 col-lg-12 col-md-4 py-1">
              <h2 className="h2">
                Opening <br className="d-none d-xl-inline" />
                Hours
              </h2>
            </div>

            <div className="col-xl-9 col-lg-12 py-1">
              <div className="row align-items-center text-start">
                <div className="col-lg-3 col-md-6 py-1">
                  <small className="text-uppercase d-block">
                    Monday – Friday
                  </small>
                  <span>9:00 AM – 4:00 PM</span>
                </div>

                <div className="col-lg-3 col-md-6 py-1">
                  <small className="text-uppercase d-block">Saturday</small>
                  <span>9:30 AM – 1:30 PM</span>
                </div>

                <div className="col-lg-3 col-md-6 py-1">
                  <small className="text-uppercase d-block">Sunday</small>
                  <span>Closed</span>
                </div>

                <div className="col-lg-3 col-md-6 py-1">
                  <small className="text-uppercase d-block">
                    Public Holidays
                  </small>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Contact Form */}
      <section className="py-5 contact-form-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <small className="badge-text badge-primary d-block mb-4">
                Contact form
              </small>
              <h2 className="h2">
                Send us a<br className="d-none d-md-inline" />
                message
              </h2>
            </div>

            {/* FORM */}
            <div className="col-lg-7">
              <LeadForm schema={formSchemas.contact} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
