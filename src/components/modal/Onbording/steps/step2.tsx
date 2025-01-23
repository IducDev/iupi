import { StepProps } from ".";
import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import { ArrowLargeLeft } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { BlueNoti } from "@/components/notifications/blueNotif";

export default function Step2({
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
    if (test.experience === "") {
      setError((prevError) => ({
        ...prevError,
        experience: "Por favor indica tu experiencia para continuar."
      }));
      setNoti(true); 
            setTimeout(() => {
                setNoti(false); 
          }, 1200);

      return false;
    }
    setError((prevError) => ({
      ...prevError,
      experience: ""
    }));
    return true;
  };
  

  const handleNextStep = () => {
    if (handleValidation()) {
      nextStep();
    }
  };

  return (
    <div className="h-[20.5em] lg:h-[18.7em] w-[94%] ml-auto mr-auto">
      {noti && <BlueNoti message={error.experience} />}
      
      <h1 className="text-h6-medium h-max-[3em] text-center flex justify-center p-1 pt-4 lg:pt-8">¿Cuál es tu experiencia en inversiones?</h1>
      <button className="absolute top-1 right-2 p-2" onClick={handleLater}>
      <Image src={ArrowLargeLeft} alt="" className="h-5 w-5"></Image>
      </button>
      <p className="text-p2-regular text-center text-white400 p-2 pt-2">Test del inversor</p>
      <ProgressBar
        currentStep={2}
        totalSteps={5}
        onNext={handleNextStep}
        onPrevious={previousStep}
      />
      <form className="flex flex-col  lg:w-[25em] lg:m-auto">
        <p className="text-white600 text-p3-regular pt-4 pb-4 ml-3">Elige una opción:</p>

        <div className="flex flex-col gap-3 ml-4">
          <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center text-center">
            <input
              type="radio"
              name="experience"
              value="Ninguna experiencia"
              checked={test.experience === "Ninguna experiencia"}
              onChange={(e) => handleChange("experience", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Ninguna experiencia.
          </label>
          <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center text-center">
            <input
              type="radio"
              name="experience"
              value="Alguna experiencia con productos básicos"
              checked={test.experience === "Alguna experiencia con productos básicos"}
              onChange={(e) => handleChange("experience", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Alguna experiencia con productos básicos.
          </label>
          <label className="flex flex-row gap-3 text-white700 text-p2-regular">
            <input
              type="radio"
              name="experience"
              value="Experiencia amplia con diversos instrumentos"
              checked={test.experience === "Experiencia amplia con diversos instrumentos"}
              onChange={(e) => handleChange("experience", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Experiencia amplia con diversos instrumentos.
          </label>
        </div>
      </form>

      <div className="flex flex-col h-full justify-end m-auto lg:w-[25em] ">
        <Button variant={test.experience === "" ? "basic" : "solid" } size="small" onClick={handleNextStep}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}
