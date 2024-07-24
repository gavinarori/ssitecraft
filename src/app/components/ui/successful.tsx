"use client";
import Image from "next/image";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Modal from "./modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";


const PaymentModal = ({
  showPaymentModal,
  setShowPaymentModal,
}: {
  showPaymentModal: boolean;
  setShowPaymentModal: Dispatch<SetStateAction<boolean>>;
}) => {

  
 
  const words = [
    {
      text: "Payment",
    },
    {
      text: "Confirmed",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


  return (
    <Modal showModal={showPaymentModal} setShowModal={setShowPaymentModal}>
      <div
              className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 h-auto w-auto"
            >
                <Image
                src="https://clipart-library.com/images/qcBBexbc5.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
              <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <TypewriterEffectSmooth words={words} />
              </p>
            </div>
    </Modal>
  );
};

export function usePaymentModal() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const PaymentModalCallback = useCallback(() => {
    return (
      <PaymentModal
        showPaymentModal={showPaymentModal}
        setShowPaymentModal={setShowPaymentModal}
      />
    );
  }, [showPaymentModal, setShowPaymentModal]);

  return useMemo(
    () => ({ setShowPaymentModal, PaymentModal: PaymentModalCallback }),
    [setShowPaymentModal, PaymentModalCallback],
  );
}