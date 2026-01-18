import Image from "next/image"; 
import './heroblock.scss';
import Button from "@/components/ui/Button";

export const HeroBlock = () => {
  return (
    <>
      <section className="hero-sec">
        <div className="container">
 
          <div className="row">
            <div className="col-md-6 mb-3">

              <div className="d-flex flex-column justify-content-between h-100">
                <div className="d-flex flex-column justify-content-between hero-text h-100">
                  <h1 className="h2">
                    Natural Stone.<br />
                    Pure Craft.
                  </h1>

                  <div className="w-100 d-flex justify-content-between">
                    <div className="d-flex hero-info">
                      <div className="col-6">
                        <span>UNITED STATES</span>
                        <span>02 : 11 : 49</span>
                        <span>+1 484 224 2972</span>
                      </div>

                      <div className="col-6">
                        <span>SINGAPORE</span>
                        <span>15 : 11 : 49</span>
                        <span>+65 6383 3788</span>
                      </div>
                    </div>

                    <div className="est">
                      <p>EST. 1994</p>
                    </div>
                  </div>
                </div>

                <div className="position-relative hero_block">
                  <Image src="/home/hero-pic2.webp" alt="" width={718} height={526} className="w-100" />
                  <Button rounded size="md" label="Get Quote" href="#" variant="white" className="icon-verticle d-md-none" />
                </div>
              </div>

            </div>

            <div className="col-md-6 mb-3">
              <div className="position-relative hero_block">
                <Image src="/home/hero-pic1.webp" alt="" width={720} height={839} className="w-100" />
                <Button rounded size="md" label="View services" href="#" variant="white" />
              </div>
            </div>

          </div>
          
        </div>
      </section>
    </>
  );
};
