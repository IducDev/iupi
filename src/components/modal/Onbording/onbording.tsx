"use client";
import { useState } from "react";
import { TestData, ErrorData ,Step0, Step1, Step2, Step3, Step4, Step5, Step6, Step7 } from "./steps";
import { skipProfileFinance } from "@/utils/financialProfile/sendfinancialProfile";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation"

const Onbording = () => {

    const [step, setStep] = useState(0);
    const totalSteps = 8;
    
    const router = useRouter();
    const [test, setTest] = useState<TestData>({
        finance: "",
        objective: "",
        time: "",
        lost: "",
        income:"",
        expenses: "",
        savings:"",

    });
    
    const [error, setError] = useState<ErrorData>({
        finance: "",
        objective: "",
        time: "",
        lost: "",
        income:"",
        expenses:"",
        savings: ""

    });

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const previousStep = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleLater = () => {
        Swal.fire({
          title: '¿Deseas abandonar el test de perfil financiero?',
          text: 'Puedes realizar el test de nuevo más tarde',
          icon: 'warning',
          showCancelButton: true, 
          confirmButtonText: 'Sí, abandonar',
          cancelButtonText: 'No, continuar',
          customClass: {
            popup: 'bg-white text-white900 text-p3-regular rounded-lg shadow-lg sm:w-[70%] lg:w-[50%] m-auto p-0 m-0 ',
            title: 'font-semibold text-p1-semibold', 
            confirmButton: 'bg-white300 text-white900',
            cancelButton: 'bg-accent400 text-white'
          },
          reverseButtons: true, 
        }).then((result) => {
          if (result.isConfirmed) {
             skipProfileFinance();
            router.push("/app/home");
          }
        });
      };
      

    const handleChange = (name: string, value: string) => {
        setTest({
            ...test,
            [name]: value
        });
    };

    const validateStep = (step: number) => {
        switch (step) {
            case 0:
                return <Step0 nextStep={nextStep} previousStep={previousStep} handleLater={handleLater} handleChange={handleChange} test={test} error={error} setError={setError} />;
            case 1:
                return <Step1 nextStep={nextStep} previousStep={previousStep} handleLater={handleLater} handleChange={handleChange} test={test} error={error} setError={setError} />;
            case 2:
                return <Step2 nextStep={nextStep} previousStep={previousStep} handleLater={handleLater} handleChange={handleChange} test={test} error={error} setError={setError} />;
            case 3:
                return <Step3 nextStep={nextStep} previousStep={previousStep} handleLater={handleLater} handleChange={handleChange} test={test} error={error} setError={setError} />;
            case 4:
                return <Step4 nextStep={nextStep} previousStep={previousStep} handleLater={handleLater} handleChange={handleChange} test={test} error={error} setError={setError} />;
            case 5:
                return <Step5 nextStep={nextStep} previousStep={previousStep} handleLater={handleLater} handleChange={handleChange} test={test} error={error} setError={setError} />;
            case 6:
                return <Step6 nextStep={nextStep} previousStep={previousStep} handleLater={handleLater} handleChange={handleChange} test={test} error={error} setError={setError} />;
            case 7:
                return <Step7 />;
            default:
                return null;
        }
    };
    
    return (
<div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-[25em] lg:w-[95vh] relative flex flex-col h-[41.2em] m-auto">
                {validateStep(step)}
            </div>
        </div>
    );
};

export default Onbording;
