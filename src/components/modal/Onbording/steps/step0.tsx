import Image from "next/image";
import { useMediaQuery } from "react-responsive";
// import montainMobile from "@/assets/animations/montainMobile.gif";
import montain from "@/assets/animations/montain.json";
import ProgressBar from "@/components/progressBar/bar";
import Button from "@/components/ui/Button";
import { StepProps } from ".";
import { ArrowLargeLeft } from "@/assets";
import LottieAnimation from "@/components/animations/lottieAnimation";

export default function Step0({ nextStep, previousStep, handleLater }: StepProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="relative h-full w-full overflow-hidden">

      <div className="absolute bottom-0 left-0 h-[50%] w-full z-0 overflow-hidden rounded-lg shadow-lg">
        {isMobile ? (
        <LottieAnimation animationData={montain} size={29} />
        ) : (
        <LottieAnimation animationData={montain} size={51} cropHeight={50} />
        )}
      </div>


      <div className="relative z-10 w-[90%] ml-auto mr-auto bg-white">
        <h1 className="text-h5-bold text-center p-1 pt-3 lg:pt-5">Casi listo</h1>
        <button className="absolute top-2 right-2 p-2" onClick={handleLater}>
          <Image src={ArrowLargeLeft} alt="Flecha hacia atrás" className="h-5 w-5" />
        </button>
        <p className="text-p2-regular text-center p-2 pt-2">
          Pero aún quedan algunos pasos, porque...
        </p>

        <ProgressBar
          currentStep={0}
          totalSteps={8}
          onNext={nextStep}
          onPrevious={previousStep}
        />

        <p className="flex text-center pt-4 lg:w-[25em] lg:m-auto">
          Para conocerte mejor y ofrecerte una experiencia más personalizada te recomendamos responder las siguientes preguntas.
        </p>
        <p className="text-center pt-2 pb-2">
          Toman en promedio 5 minutos y son muy sencillas..
        </p>

        <div className="flex flex-col gap-3 p-1 pb-4 m-auto lg:w-[25em]">
          <Button variant="solid" size="small" onClick={nextStep}>
            Test del Inversor
          </Button>
          <Button variant="basic" size="small" onClick={handleLater}>
            Lo tomaré más tarde
          </Button>
        </div>
      </div>
    </div>
  );
}
