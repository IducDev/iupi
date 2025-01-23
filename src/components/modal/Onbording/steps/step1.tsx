import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import { StepProps } from ".";
import Image from "next/image";
import { ArrowLargeLeft } from "@/assets";
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
        if (test.age === "") {
            setError((prevError) => ({
                ...prevError,
                age: "Por favor selecciona un rango de edad para continuar."
            }));
            setNoti(true); 
            setTimeout(() => {
                setNoti(false); 
            }, 1200);
            return false;
        }

        setError((prevError) => ({
            ...prevError,
            age: ""
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
            <div className="h-[17.5em] lg:h-[15em] w-[94%] ml-auto mr-auto">
                {noti && <BlueNoti message={error.age} />}
                <h1 className="text-h6-medium text-center h-max-[3em] p-1 pt-8">¿Cuál es tu edad?</h1>
                <button className="absolute top-1 right-2 p-2" onClick={handleLater}>
                    <Image src={ArrowLargeLeft} alt="" className="h-5 w-5"></Image>
                </button>
                <p className='text-p2-regular text-center text-white400 p-2 pt-3'>Test del inversor</p>

                <ProgressBar
                    currentStep={1}
                    totalSteps={5}
                    onNext={handleNextStep}
                    onPrevious={previousStep}
                />

                <form className="flex flex-col lg:w-[25em] lg:m-auto">
                    <h2 className="text-white900 text-p2-regular justify-center text-center pt-4 ">
                        Responde las siguientes preguntas seleccionando la opción que mejor refleje tu situación y preferencias.
                    </h2>
                    <p className="text-white600 text-p3-regular pt-4 pb-4 ml-4">Indícanos un rango aproximado de tu edad:</p>

                    <div className="flex flex-col gap-3 ml-4">
                        <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center text-center">
                            <input
                                type="radio"
                                name="age"
                                value="Menos de 35 años"
                                checked={test.age === "Menos de 35 años"}
                                onChange={(e) => handleChange("age", e.target.value)}
                                className="h-5 w-5 focus:outline-none"
                            />
                            Menos de 35 años.
                        </label>
                        <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center text-center">
                            <input
                                type="radio"
                                name="age"
                                value="Entre 35-55 años"
                                checked={test.age === "Entre 35-55 años"}
                                onChange={(e) => handleChange("age", e.target.value)}
                                className="h-5 w-5 focus:outline-none"
                            />
                            Entre 35-55 años.
                        </label>
                        <label className="flex flex-row gap-3 text-white700 text-p2-regular items-center text-center">
                            <input
                                type="radio"
                                name="age"
                                value="Más de 55 años"
                                checked={test.age === "Más de 55 años"}
                                onChange={(e) => handleChange("age", e.target.value)}
                                className="h-5 w-5 focus:outline-none"
                            />
                            Más de 55 años.
                        </label>
                    </div>
                </form>

                <div className="flex flex-col h-full justify-end m-auto lg:w-[25em]">
                    <Button variant={test.age === "" ? "basic" : "solid"} size="small" onClick={handleNextStep}>
                        Siguiente
                    </Button>
                </div>
            </div>
        </>
    );
}
