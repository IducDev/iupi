import Step0 from "./step0";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";
import Step7 from "./step7";

export interface TestData {
    finance: "Las finanzas son básicamente como manejamos nuestro dinero" | "Conozco sobre sobre varios instrumentos y he invertido en acciones y nuevas empresas" | "Sé un poco sobre inversiones y he puesto mi dinero en bonos y cuentas de ahorro" | "";  
    objective: "Mantener mi dinero a salvo (ahorrando)" | "Ganar un poco sin arriesgar demasiado (invertir con precaución)" | "Apostar por grandes ganancias asumiendo más riesgos (invertir con audacia)" | "";
    time: "Menos de 2 años" | "Entre 2 y 5 años" | "Más de 5 años" | "";
    lost: "Vendo todo inmediatamente" | "Espero un tiempo antes de tomar una decisión" | "Aprovecho para comprar más" | "";
    income: number |"",
    expenses: number | "",
    savings: string |"",

  }
  

export interface ErrorData {
    finance: string;
    objective: string;
    time: string;
    lost: string;
    income: string,
    expenses: string,
    savings: string,

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