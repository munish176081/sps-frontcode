"use client";

import { Dialog, DialogPanel } from "@headlessui/react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function GlobalDialog({
  open,
  onClose,
  title,
  description,
  children,
}: Props) {
  return (
    <Dialog open={open} onClose={() => {}} className="modal-wrapper">
      <div className="modal-overlay" />

      <div className="modal-container">
        <DialogPanel className="modal-box">

          {/* HEADER */}
          <div className="modal-header">

            <div>
              {title && <h3 className="modal-title">{title}</h3>}
              {description && (
                <p className="modal-description">{description}</p>
              )}
            </div>

            <button
              onClick={onClose}
              className="modal-close"
            >
              ✕
            </button>

          </div>

          {/* CONTENT */}
          <div className="modal-body">
            {children}
          </div>

        </DialogPanel>
      </div>
    </Dialog>
  );
}