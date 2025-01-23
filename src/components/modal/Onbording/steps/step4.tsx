import { StepProps } from ".";
import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowLargeLeft } from "@/assets";
import { useState } from "react";
import { BlueNoti } from "@/components/notifications/blueNotif";

export default function Step4({
  nextStep,
  previousStep,
  handleLater,
  handleChange,
  test,
  error,
  setError
}: StepProps) {

    const [noti, setNoti] = useState(false);
  const handleValidation = () => {
    if (test.lost === "") {
      setError((prevError) => ({
        ...prevError,
        lost: "Por favor selecciona una acción para continuar."
      }));
      setNoti(true); 
            setTimeout(() => {
                setNoti(false); 
          }, 1200);

      return false;
    }
    setError((prevError) => ({
      ...prevError,
      lost: ""
    }));
    return true;
  };

  const handleNextStep = () => {
    if (handleValidation()) {
      nextStep();
    }
  };

  return (
    <div className="w-[94%] ml-auto mr-auto h-[18.5em] lg:h-[17.5em]">
        {noti && <BlueNoti message={error.lost} />}
      <h1 className="text-h6-medium text-center w-[17em] m-auto p-1 pt-4">
        Si tus inversiones pierden 20% de su valor ¿Qué harías?
      </h1>
      <button className="absolute top-1 right-2 p-2" onClick={handleLater}>
      <Image src={ArrowLargeLeft} alt="" className="h-5 w-5"></Image>
      </button>
      <p className="text-p2-regular text-center text-white400 p-2">
        Test del inversor
      </p>
      <ProgressBar
        currentStep={4}
        totalSteps={5}
        onNext={handleNextStep}
        onPrevious={previousStep}
      />
      <form className="flex flex-col lg:w-[25em] lg:m-auto">
      <p className="text-white600 text-p3-regular pt-6 pb-4 ml-3">Elige una opción:</p>

      <div className="flex flex-col gap-3 ml-4">
      <label className="flex flex-row gap-3 text-white900 text-p2-regular items-center text-center">
            <input
              type="radio"
              name="lost"
              value="Vendo todo inmediatamente"
              checked={test.lost === "Vendo todo inmediatamente"}
              onChange={(e) => handleChange("lost", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Vendo todo inmediatamente.
          </label>
          <label className="flex flex-row gap-3 text-white900 text-p2-regular">
            <input
              type="radio"
              name="lost"
              value="Espero un tiempo antes de tomar una decisión"
              checked={test.lost === "Espero un tiempo antes de tomar una decisión"}
              onChange={(e) => handleChange("lost", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Espero un tiempo antes de tomar una decisión.
          </label>
          <label className="flex flex-row gap-3 text-white900 text-p2-regular items-center text-center">
            <input
              type="radio"
              name="lost"
              value="Aprovecho para comprar más"
              checked={test.lost === "Aprovecho para comprar más"}
              onChange={(e) => handleChange("lost", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Aprovecho para comprar más.
          </label>
        </div>
      </form>

      <div className="flex flex-col h-full justify-end  m-auto lg:w-[25em] ">
          <Button variant={test.lost === "" ? "basic" : "solid" } size="small" onClick={handleNextStep}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}
