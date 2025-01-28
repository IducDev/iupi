import { StepProps } from ".";
import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import { ArrowLargeLeft } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { BlueNoti } from "@/components/notifications/blueNotif";

export default function Step1({
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
    if (test.objective === "") {
      setError((prevError) => ({
        ...prevError,
        objective: "Por favor selecciona una respuesta para continuar."
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


  const handleNextStep = () => {
    if (handleValidation()) {
      nextStep();
    }
  };

  return (
    <div className="h-[17.5em] lg:h-[18.7em] w-[94%] ml-auto mr-auto">
      {noti && <BlueNoti message={error.objective} />}

      <h1 className="text-h6-medium h-max-[3em] text-center flex justify-center p-1 pt-4 lg:pt-8">¿Cuál es tu objetivo principal al invertir?</h1>
      <button className="absolute top-1 right-2 p-2" onClick={handleLater}>
        <Image src={ArrowLargeLeft} alt="" className="h-5 w-5"></Image>
      </button>
      <p className="text-p2-regular text-center text-white400 p-2 pt-2">Test del inversor</p>
      <ProgressBar
        currentStep={1}
        totalSteps={5}
        onNext={handleNextStep}
        onPrevious={previousStep}
      />
      <form className="flex flex-col  lg:w-[25em] lg:m-auto">
        <p className="text-white600 text-p3-regular pt-4 pb-4 ml-3">Elige una opción:</p>

        <div className="flex flex-col gap-3 ml-4">
          <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center ">
            <input
              type="radio"
              name="objective"
              value="Mantener mi dinero a salvo (ahorrando)"
              checked={test.objective === "Mantener mi dinero a salvo (ahorrando)"}
              onChange={(e) => handleChange("objective", e.target.value)}
              className="h-5 w-5 focus:outline-none"
            />
            Mantener mi dinero a salvo (ahorrando).
          </label>
          <label className="flex flex-row gap-3 text-white700 text-p2-regular ">
            <input
              type="radio"
              name="objective"
              value="Ganar un poco sin arriesgar demasiado (invertir con precaución)"
              checked={test.objective === "Ganar un poco sin arriesgar demasiado (invertir con precaución)"}
              onChange={(e) => handleChange("objective", e.target.value)}
              className="h-6 w-6  items-centerfocus:outline-none"
            />
            Ganar un poco sin arriesgar demasiado (invertir con precaución).
          </label>
          <label className="flex flex-row gap-3 text-white700 text-p2-regular">
            <input
              type="radio"
              name="objective"
              value="Apostar por grandes ganancias asumiendo más riesgos (invertir con audacia)"
              checked={test.objective === "Apostar por grandes ganancias asumiendo más riesgos (invertir con audacia)"}
              onChange={(e) => handleChange("objective", e.target.value)}
              className="h-7 w-7 focus:outline-none"
            />
            Apostar por grandes ganancias asumiendo más riesgos (invertir con audacia).
          </label>
        </div>
      </form>

      <div className="flex flex-col h-full justify-end m-auto lg:w-[25em] ">
        <Button className="rounded-full" variant={test.objective === "" ? "basic" : "solid"} size="small" onClick={handleNextStep}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}
