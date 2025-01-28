import { StepProps } from ".";
import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowLargeLeft } from "@/assets";
import { useState } from "react";
import { BlueNoti } from "@/components/notifications/blueNotif";

export default function Step3({
  nextStep,
  previousStep,
  handleLater,
  handleChange,
  error,
  test,
  setError
}: StepProps) {

  const [noti, setNoti] = useState(false);
  const handleValidation = () => {
    if (test.time === "") {
      setError((prevError) => ({
        ...prevError,
        time: "Por favor selecciona un plazo para continuar."
      }));
      setNoti(true); 
            setTimeout(() => {
                setNoti(false); 
          }, 1200);

      return false;
    }
    setError((prevError) => ({
      ...prevError,
      time: ""
    }));
    return true;
  };

  const handleNextStep = () => {
    if (handleValidation()) {
      nextStep();
    }
  };

  return (
    <div className="h-[20em] lg:h-[17.7em] w-[94%] ml-auto mr-auto">
            {noti && <BlueNoti message={error.time} />}
      <h1 className="text-h6-medium text-center p-1 pt-8">¿Cuánto tiempo planeas invertir?</h1>
      <button className="absolute top-1 right-2 p-2" onClick={handleLater}>
      <Image src={ArrowLargeLeft} alt="" className="h-5 w-5"></Image>
      </button>
      <p className="text-p2-regular text-center text-white400 p-2 pt-4">Test del inversor</p>
      <ProgressBar
        currentStep={3}
        totalSteps={5}
        onNext={handleNextStep}
        onPrevious={previousStep}
      />
      <form className="flex flex-col  lg:w-[25em] lg:m-auto">
        <p className="text-white600 text-p3-regular pt-6 pb-4 ml-3">Elige una opción:</p>

        <div className="flex flex-col gap-3 ml-4">
          <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center text-center">
            <input
              type="radio"
              name="time"
              value="Menos de 2 años"
              checked={test.time === "Menos de 2 años"}
              onChange={(e) => handleChange("time", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Menos de 2 años.
          </label>
          <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center text-center">
            <input
              type="radio"
              name="time"
              value="Entre 2 y 5 años"
              checked={test.time === "Entre 2 y 5 años"}
              onChange={(e) => handleChange("time", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Entre 2 y 5 años.
          </label>
          <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center text-center">
            <input
              type="radio"
              name="time"
              value="Más de 5 años"
              checked={test.time === "Más de 5 años"}
              onChange={(e) => handleChange("time", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Más de 5 años.
          </label>
        </div>
      </form>

      <div className="flex flex-col h-full justify-end  m-auto lg:w-[25em]">
        <Button variant={test.time === "" ? "basic" : "solid" } size="small" onClick={handleNextStep} className="rounded-full">
          Siguiente
        </Button>
      </div>
    </div>
  );
}
