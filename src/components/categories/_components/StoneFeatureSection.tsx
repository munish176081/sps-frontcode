"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useModal } from "@/components/modals/ModalProvider";
import { formSchemas } from "@/components/modals/formSchemas";

type Brochures = {
  project_book?: {
    image: string;
    file: string;
  };
  range?: {
    image: string;
    file: string;
  };
};

type Props = {
  brochures?: Brochures;
};

export default function StoneFeatureSection({ brochures }: Props) {
  const { openModal } = useModal();

  return (
    <section className="py-5 stone-feature">
      <div className="container">
        {/* HEADER */}
        <div className="row align-items-end mb-4 pb-2">
          <div className="col-lg-8">
            <small className="text-muted d-block mb-2">Explore More</small>
            <h2 className="h2 mb-0">
              Decorative Natural Stone Walling, <br />
              Crafted For Architectural Impact.
            </h2>
          </div>
        </div>

        <hr />

        <div className="row g-4 mt-4">
          {/* PROJECT BOOK */}
          {brochures?.project_book && (
            <div className="col-md-6">
              <div className="brochure-card text-center">
                <Image
                  src={brochures.project_book.image}
                  alt="Project Book"
                  width={600}
                  height={500}
                  className="img-fluid mb-3 rounded-3"
                />

                <Button
                  label="Download"
                  variant="black"
                  rounded
                  onClick={() =>
                    openModal({
                      schema: formSchemas.samples,
                      brochure: "project_book",
                    })
                  }
                />
              </div>
            </div>
          )}

          {/* PRODUCT RANGE */}
          {brochures?.range && (
            <div className="col-md-6">
              <div className="brochure-card text-center">
                <Image
                  src={brochures.range.image}
                  alt="Product Range"
                  width={600}
                  height={500}
                  className="img-fluid mb-3 rounded-3"
                />

                <Button
                  label="Download"
                  variant="black"
                  rounded
                  onClick={() =>
                    openModal({
                      schema: formSchemas.samples,
                      brochure: "range",
                    })
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
