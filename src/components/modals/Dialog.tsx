"use client";

import { Dialog, DialogPanel } from "@headlessui/react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const sizeClass = {
  sm: "600px",
  md: "800px",
  lg: "1100px",
};

export default function GlobalDialog({
  open,
  onClose,
  title,
  description,
  size = "md",
  children,
}: Props) {
  return (
    <Dialog open={open} onClose={() => {}} className="modal-wrapper">
      <div className="modal-overlay" />

      <div className="modal-container">
        <DialogPanel
          className="modal-box"
          style={{
            maxWidth: sizeClass[size] || "800px",
            width: "100%",
          }}
        >
          {/* HEADER */}
          <div className="modal-header">
            <div>
              {title && <h3 className="modal-title">{title}</h3>}
              {description && (
                <p className="modal-description">{description}</p>
              )}
            </div>

            <button onClick={onClose} className="modal-close">
              ✕
            </button>
          </div>

          {/* CONTENT */}
          <div className="modal-body">{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
