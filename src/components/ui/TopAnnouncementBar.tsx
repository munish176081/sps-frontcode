"use client";

import Button from "@/components/ui/Button";
import { useModal } from "@/components/modals/ModalProvider";
import { formSchemas } from "../modals/formSchemas";

export default function TopAnnouncementBar() {
  const { openModal } = useModal();

  return (
    <div className="top-announcement">
      <div className="container d-flex align-items-center justify-content-center flex-wrap gap-3">

        <p className="announcement-text mb-0">
          REGISTER YOUR INFORMATION FOR
        </p>

        <div className="d-flex gap-3">

          <Button
            label="Free Stone Samples"
            variant="outline"
            rounded
            onClick={() =>
              openModal({
                schema: formSchemas.samples,
              })
            }
          />

          <Button
            label="Fireplace Quote"
            variant="outline"
            rounded
            onClick={() =>
              openModal({
                schema: formSchemas.fireplace,
              })
            }
          />

        </div>

      </div>
    </div>
  );
}