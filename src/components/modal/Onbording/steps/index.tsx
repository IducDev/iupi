import Step0 from "./step0";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";
import Step7 from "./step7";

export interface TestData {
    age: "Más de 55 años" | "Entre 35-55 años" | "Menos de 35 años" | "";  
    experience: "Ninguna experiencia" | "Alguna experiencia con productos básicos" | "Experiencia amplia con diversos instrumentos" | "";
    time: "Menos de 2 años" | "Entre 2 y 5 años" | "Más de 5 años" | "";
    lost: "Vendo todo inmediatamente" | "Espero un tiempo antes de tomar una decisión" | "Aprovecho para comprar más" | "";
    objective: "Preservar mi capital" | "Obtener un rendimiento moderado con riesgo limitado" | "Maximizar rendimientos asumiendo mayores riesgos" | "";
  }
  

export interface ErrorData {
    age: string;
    experience: string;
    time: string;
    lost: string;
    objective: string;
}


export interface StepProps {
    nextStep: () => void;
    previousStep: () => void;
    handleLater: () => void;
    handleChange: (name: string, value: string) => void;
    test: TestData;  
    error: ErrorData; 
    setError: React.Dispatch<React.SetStateAction<ErrorData>>; 
}

export {
    Step0,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7
}