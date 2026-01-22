import LogoInfiniteSlider from "./LogoInfiniteSlider";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const ArchitecureBlock = () => {
  return (
    <section className="bg-green py-4 py-md-5 architecure-section">
      <div className="container">

        <div className="d-grid architecure-row">
          <div className="stone-image d-none d-md-block">
            <Image
              src="/home/architecure-pic.webp"
              alt="Stone Architecture"
              width={700}
              height={450}
              priority
              className="w-100"
            />
          </div>

          <div className="pt-4 stone-content text-white">
            <span className="d-block badge-text text-white">Trusted by Industry Leaders</span>
            <h2 className="d-block h5">
              Splendour in Stone Has Been Featured By Australia’s Top Architecture
              And Design Publications.
            </h2>
            <Button rounded size="md" label="Get a sample" href="#" variant="white" />
          </div>
        </div>
      </div>

      <LogoInfiniteSlider />
      
    </section>
  );
} 