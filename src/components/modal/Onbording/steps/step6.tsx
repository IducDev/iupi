import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { LogoAzul } from "@/assets";
import confeti from "@/assets/animations/confeti.json";
import LottieAnimation from "@/components/animations/lottieAnimation";
import { useMediaQuery } from "react-responsive";
import { sendProfileFinance } from "@/utils/financialProfile/sendfinancialProfile";
import { StepProps } from ".";

export default function Step6({ nextStep, test }: StepProps) {
  const [stage, setStage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const hasExecuted = useRef(false);

  useEffect(() => {
    if (hasExecuted.current) return;
    hasExecuted.current = true;


    sendProfileFinance(test)
      .then(() => {
        setTimeout(() => {
          setStage(1); 
        }, 1000);

        setTimeout(() => {
          setStage(2); 
          setShowConfetti(true); 
        }, 2500);

        setTimeout(() => {
          setShowConfetti(false); 
          nextStep();
        }, 5000);
      })
      .catch((error) => {
        console.error("Error al enviar datos o recuperar perfil:", error);
      });
  }, [nextStep, test]);

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      {stage === 0 && <div className="h-full"></div>}

      {stage >= 1 && (
        <div className="flex flex-col items-center text-center">
          <Image src={LogoAzul} alt="Logo" className="w-32 h-32" />
          <h1 className="text-h4-bold text-white900 w-[10em]">
            ¡Completaste tu perfil!
          </h1>
        </div>
      )}

      {showConfetti && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <LottieAnimation animationData={confeti} size={isMobile ? 48 : 80} />
        </div>
      )}
    </div>
  );
}
