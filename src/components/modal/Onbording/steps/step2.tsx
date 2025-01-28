import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import { StepProps } from ".";
import Image from "next/image";
import { ArrowLargeLeft } from "@/assets";
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
        if (test.finance === "") {
            setError((prevError) => ({
                ...prevError,
                finance: "Por favor selecciona una respuesta para continuar."
            }));
            setNoti(true); 
            setTimeout(() => {
                setNoti(false); 
            }, 1200);
            return false;
        }

        setError((prevError) => ({
            ...prevError,
            finance: ""
        }));
        return true;
    };

    const handleNextStep = () => {
        if (handleValidation()) {
            nextStep();
        }
    };

    return (
        <>
            <div className="h-[14.3em] lg:h-[15em] w-[94%] ml-auto mr-auto">
                {noti && <BlueNoti message={error.finance} />}
                <h1 className="text-h6-medium text-center h-max-[3em] p-1 pt-8">¿Qué sabes sobre finanzas?</h1>
                <button className="absolute top-1 right-2 p-2" onClick={handleLater}>
                    <Image src={ArrowLargeLeft} alt="" className="h-5 w-5"></Image>
                </button>
                <p className='text-p2-regular text-center text-white400 p-2 pt-3'>Test del inversor</p>

                <ProgressBar
                    currentStep={2}
                    totalSteps={5}
                    onNext={handleNextStep}
                    onPrevious={previousStep}
                />

                <form className="flex flex-col lg:w-[25em] lg:m-auto">
                    <h2 className="text-white900 text-p2-regular justify-center text-center pt-4 ">
                        Responde las siguientes preguntas seleccionando la opción que mejor refleje tu situación y preferencias.
                    </h2>
                    <p className="text-white600 text-p3-regular pt-2 pb-2 ml-4">Elige una opción:</p>

                    <div className="flex flex-col gap-3 ml-4">
                        <label className="flex flex-row gap-3 text-white700 text-p2-regular ">
                            <input
                                type="radio"
                                name="finance"
                                value="Las finanzas son básicamente como manejamos nuestro dinero"
                                checked={test.finance === "Las finanzas son básicamente como manejamos nuestro dinero"}
                                onChange={(e) => handleChange("finance", e.target.value)}
                                className="h-6 w-6  focus:outline-none"
                            />
                            Las finanzas son básicamente como manejamos nuestro dinero.
                        </label>
                        <label className="flex flex-row gap-3 text-white700 text-p2-regular  ">
                            <input
                                type="radio"
                                name="finance"
                                value="Sé un poco sobre inversiones y he puesto mi dinero en bonos y cuentas de ahorro"
                                checked={test.finance === "Sé un poco sobre inversiones y he puesto mi dinero en bonos y cuentas de ahorro"}
                                onChange={(e) => handleChange("finance", e.target.value)}
                                className="h-7 w-7 focus:outline-none"
                            />
                            Sé un poco sobre inversiones y he puesto mi dinero en bonos y cuentas de ahorro.
                        </label>
                        <label className="flex flex-row gap-3 text-white700 text-p2-regular ">
                            <input
                                type="radio"
                                name="finance"
                                value="Conozco sobre sobre varios instrumentos y he invertido en acciones y nuevas empresas"
                                checked={test.finance === "Conozco sobre sobre varios instrumentos y he invertido en acciones y nuevas empresas"}
                                onChange={(e) => handleChange("finance", e.target.value)}
                                className="h-8 w-8  focus:outline-none"
                            />
                            Conozco sobre sobre varios instrumentos y he invertido en acciones y nuevas empresas.
                        </label>
                    </div>
                </form>

                <div className="flex flex-col h-full justify-end m-auto lg:w-[25em]">
                    <Button variant={test.finance === "" ? "basic" : "solid"} size="small" onClick={handleNextStep} className="rounded-full">
                        Siguiente
                    </Button>
                </div>
            </div>
        </>
    );
}
