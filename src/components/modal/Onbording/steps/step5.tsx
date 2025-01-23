import { StepProps } from ".";
import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import { sendProfileFinance } from "@/utils/financialProfile/financialProfile";
import { ArrowLargeLeft } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { BlueNoti } from "@/components/notifications/blueNotif";
import { useUserStore } from "@/store/user/userStore";

export default function Step5({
  nextStep,
  previousStep,
  handleLater,
  handleChange,
  test,
  error,
  setError
}: StepProps) {

  const [noti, setNoti] = useState(false);
  const user = useUserStore((state) => state.user)
  const userId = user?.id || 0;

  const handleValidation = () => {
    if (test.objective === "") {
      setError((prevError) => ({
        ...prevError,
        objective: "Por favor selecciona un objetivo para continuar."
      }));
      setNoti(true); 
            setTimeout(() => {
                setNoti(false); 
          }, 1200);

      return false;
    }
    setError((prevError) => ({
      ...prevError,
      objective: ""
    }));
    return true;
  };

  const handleSendTest = () => {
    if (handleValidation()) {
      sendProfileFinance(test, userId)
      nextStep();
    }
  };

  return (
    <div className="h-[18em] w-[95%] mr-auto ml-auto lg:h-[15em]">
      {noti && <BlueNoti message={error.objective} />}
      <h1 className="text-h6-medium text-center w-[17em] lg:w-[15em] m-auto pb-2 pt-5">
        ¿Cuál es tu objetivo principal al invertir?
      </h1>
      <button className="absolute top-1 right-2 p-2" onClick={handleLater}>
      <Image src={ArrowLargeLeft} alt="" className="h-5 w-5"></Image>
      </button>
      <p className="text-p2-regular text-center pb-2 text-white400">
        Test del inversor
      </p>
      <ProgressBar
        currentStep={5}
        totalSteps={5}
        onNext={handleSendTest}
        onPrevious={previousStep}
      />
      <form className="flex flex-col lg:w-[25em] lg:m-auto">
      <p className="text-white600 text-p3-regular pt-6 pb-4 ml-3">
          Elige una opción:
        </p>

        <div className="flex flex-col gap-3 ml-4">
          <label className="flex flex-row gap-3 text-white900 text-p2-regular items-center text-center">
            <input
              type="radio"
              name="objective"
              value="Preservar mi capital"
              checked={test.objective === "Preservar mi capital"}
              onChange={(e) => handleChange("objective", e.target.value)}
              className="h-4 w-4 focus:outline-none"
            />
            Preservar mi capital.
          </label>
          <label className="flex flex-row gap-3 text-white900 text-p2-regular">
            <input
              type="radio"
              name="objective"
              value="Obtener un rendimiento moderado con riesgo limitado"
              checked={test.objective === "Obtener un rendimiento moderado con riesgo limitado"}
              onChange={(e) => handleChange("objective", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Obtener un rendimiento moderado con riesgo limitado.
          </label>
          <label className="flex flex-row gap-3 text-white900 text-p2-regular">
            <input
              type="radio"
              name="objective"
              value="Maximizar rendimientos asumiendo mayores riesgos"
              checked={test.objective === "Maximizar rendimientos asumiendo mayores riesgos"}
              onChange={(e) => handleChange("objective", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Maximizar rendimientos asumiendo mayores riesgos.
          </label>
        </div>
      </form>

      <div className="flex flex-col h-full justify-end  m-auto lg:w-[25em]">

          <Button variant={test.lost === "" ? "basic" : "solid" } size="small" onClick={handleSendTest}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}
