import Image from "next/image";
import { BookImg, BookIcon, SkipUser} from "@/assets";
import Button from "@/components/ui/Button";
import { GameProgressBar } from "@/components/progressBar/communityBar";
import { redirect } from "next/navigation";
import { QuestionStageProps } from ".";

export function QuestionStage({ gameSelect, setAnswer, setOptionSelect, setStage }: QuestionStageProps) {

  const handleCommunity = () => {
    redirect("/app/community");
  };

  if (gameSelect === null ) {
    return (
      <div className="">
        <div className="flex flex-col p-3 h-[35em] w-[25em] mx-auto bg-primary100 rounded-2xl shadow-lg">
          <Image src={SkipUser} alt="" />
          <h1 className="text-h6-semibold text-white900 p-6 pt-8 text-center w-[18em] mx-auto">Próximamente encontrarás más niveles!</h1>
          <Button onClick={handleCommunity} variant="solid" size="small" className="rounded w-[25em]">
            Cerrar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col p-3 h-[35em] w-[25em] mx-auto bg-primary100 rounded-2xl shadow-lg">
        <Image src={BookImg} alt=" m-1 p-3" />
        <div className="p-8">
          <GameProgressBar currentStep={1} totalSteps={2} />
        </div>
        <h1 className="text-h6-semibold text-white900 p-6 pt-8 text-center w-[18em] mx-auto">{gameSelect.question}</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {gameSelect.options.map((opt, index) => (
            <button
              key={index}
              onClick={() => {
                setAnswer(index + 1);
                setOptionSelect(opt);
                setStage(2);
              }}
              className="bg-white text-white700 text-p1-bold items-center p-2 rounded-2xl"
            >
              {opt.value}
            </button>
          ))}
        </div>
        <Image src={BookIcon} alt="" className="mt-[-1em] ml-20 w-[18em]" />
      </div>
    </div>
  );
}

