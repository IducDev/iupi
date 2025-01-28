import { StepProps } from ".";
import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import { ArrowLargeLeft } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { BlueNoti } from "@/components/notifications/blueNotif";

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
      nextStep();
    }
  };

  return (
    <div className="h-[8em] w-[95%] mr-auto ml-auto lg:h-[15em]">
      {noti && <BlueNoti message={error.objective} />}
      <h1 className="text-h6-medium text-center w-[17em] lg:w-[15em] m-auto pb-2 pt-5">
        Hagamos una estimación de ahorro
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
      <form className="flex flex-col lg:w-[25em] lg:m-auto p-2 pt-4">
        <label className="flex flex-col gap-1 text-white600 text-p1-regular pb-3">
          Apróximadamente ¿Cuáles son tus ingresos mensuales?
          <input
            type="number"
            name="income"
            value={test.income || ""}
            onChange={(e) => handleChange("income", e.target.value)}
            className="w-full border border-white300 rounded text-p1-regular p-1"
            placeholder="Ingreso mensual promedio"
          />
        </label>
        <label className="flex flex-col gap-1 text-white600 text-p1-regular pb-3">
          Apróximadamente ¿Cuáles son tus gastos mensuales?
          <input
            type="number"
            name="expenses"
            value={test.expenses || ""}
            onChange={(e) => handleChange("expenses", e.target.value)}
            className="w-full border border-white300 rounded text-p1-regular p-1"
            placeholder="Gasto mensual promedio"
          />
        </label>
        <label className="text-white600 text-p1-regular ">
          ¿Cuál es el porcentaje de tus ingresos que deseas ahorrar mensualmente?<span className="text-alert400">*</span>
          </label>
          <input
            type="number"
            name="savings"
            value={test.savings || ""}
            onChange={(e) => handleChange("savings", e.target.value)}
            className="w-full border border-white300 rounded text-p1-regular p-1"
            placeholder="Porcentaje de ahorro deseado"
          />
      <p className="text-white600 pt-1 text-p2-medium">El (*) indica que esta pregunta es obligatoria para finalizar.</p>
      </form>

      <div className="flex flex-col h-full justify-end m-auto lg:w-[25em]">
        <Button variant={test.lost === "" ? "basic" : "solid"} size="small" onClick={handleSendTest} className="rounded-full">
          Siguiente
        </Button>
      </div>
    </div>
  );
}
