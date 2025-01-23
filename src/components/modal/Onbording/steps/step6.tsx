import { useState, useEffect } from "react";
import Image from "next/image";
import { LogoAzul } from "@/assets";
import { StepProps } from ".";
import confeti from "@/assets/animations/confeti.json";
import LottieAnimation from "@/components/animations/lottieAnimation";
import { useMediaQuery } from "react-responsive";
import { useFinancialProfileStore } from "@/store/user/userFinanceProfile";
import getUserProfile from "@/utils/financialProfile/getProfile";

export default function Step6({ nextStep }: StepProps) {
  const [stage, setStage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { financialProfile } = useFinancialProfileStore();

  const fetchUserData = async () => {
    await getUserProfile(); 
  };

  useEffect(() => {
    fetchUserData(); 
    const timers: NodeJS.Timeout[] = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 2000),
    ];

    if (financialProfile.riskProfile !== "") {
      timers.push(
        setTimeout(() => {
          nextStep();
        }, 3500)
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [nextStep,financialProfile.riskProfile]); 

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      {stage >= 1 && (
        <div className="flex flex-col items-center text-center">
          <Image src={LogoAzul} alt="Logo" className="w-32 h-32" />
          <h1 className="text-h4-bold text-white900 w-[10em]">
            ¡Completaste tu perfil!
          </h1>
        </div>
      )}

      {stage === 2 && (
        <div className="absolute top-10 left-[-10] w-[36em] h-[25em] flex justify-center items-center">
          {isMobile ? (
            <LottieAnimation animationData={confeti} size={32} />
          ) : (
            <LottieAnimation animationData={confeti} size={60} />
          )}
        </div>
      )}
    </div>
  );
}
