import React, { ReactNode } from "react";

export interface ModalProps {
  classname?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

function Modal({ classname, isOpen, onClose, children }: ModalProps) {
  return (
    <>
      {isOpen ? (
        <div
          className={`modal-overlay flex flex-col items-center ${classname}`}
        >
          <div className="w-full modal flex flex-col bg-slate-100">
            {children}
          </div>
          <button
            onClick={onClose}
            className="w-20 rounded p-1 text-white bg-sky-500 hover:bg-sky-700"
          >
            닫기
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
