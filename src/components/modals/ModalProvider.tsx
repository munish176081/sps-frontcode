"use client";

import { createContext, useContext, useState } from "react";
import Dialog from "./Dialog";
import DynamicForm from "./DynamicForm";

type ModalState = {
  schema?: any;
  brochure?: string;
};

type ModalContextType = {
  openModal: (config: ModalState) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("ModalProvider missing");
  return ctx;
}

export default function ModalProvider({ children }: any) {
  const [modal, setModal] = useState<ModalState | null>(null);

  const openModal = (config: ModalState) => {
    setModal(config);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Dialog
        open={!!modal}
        onClose={closeModal}
        title={modal?.schema?.title ?? ""}
        description={modal?.schema?.description}
        size={modal?.schema?.size || "md"}
      >
        {modal?.schema && (
          <DynamicForm
            schema={modal.schema}
            brochure={modal?.brochure}
          />
        )}
      </Dialog>
    </ModalContext.Provider>
  );
}