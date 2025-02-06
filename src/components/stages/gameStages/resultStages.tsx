import Image from "next/image";
import { SuccessGame, CrownOn,PointsIcon,ShieldOn , LoserGame} from "@/assets";
import { ResultStageProps } from ".";

export function ResultStage({ gameSelect, answer }: ResultStageProps) {
    return (
      <div>
        {answer === gameSelect.options.findIndex((opt) => opt.value === gameSelect.answer) + 1 ? (
          <div className="flex flex-col p-3 h-[35em] w-[25em] mx-auto bg-primary100 rounded-2xl items-center justify-center shadow-lg">
            <Image src={SuccessGame} alt="" className="justify-center" />
            <h1 className="text-white900 text-h6-semibold text-center p-4">
              ¡Felicidades por alcanzar el primer nivel de tu viaje de inversión!
            </h1>
            <div className="flex flex-row gap-3 p-2">
              <div className="flex flex-row bg-primary50 rounded-lg shadow-lg w-[7em] h-[4.5em] items-center justify-center gap-1">
                <Image src={CrownOn} alt="Ranking" />
                <h2 className="text-white500 text-p1-semibold">10</h2>
              </div>
              <div className="flex flex-row bg-primary50 rounded-lg shadow-lg w-[7em] h-[4.5em] items-center justify-center gap-1">
                <Image src={PointsIcon} alt="Puntos ganados" />
                <h2 className="text-white500 text-p1-semibold">+ 85</h2>
              </div>
              <div className="flex flex-row bg-primary50 rounded-lg shadow-lg w-[7em] h-[4.5em] items-center justify-center gap-1">
                <Image src={ShieldOn} alt="Divisiones" className="m-1"/>
                <h2 className="text-white500 text-p2-semibold">División Estrellas</h2>
              </div>
            </div>
              <div className="bg-primary50 rounded-lg p-1 shadow-lg w-full">
                  <h2 className="text-p1-regular text-center w-[30vh] mx-auto text-white700" >Puedes usar tus puntos ganados en el FCI de iUpi.</h2>
              </div>
          </div>
        ) : (
          <div className="flex flex-col p-3 h-[35em] w-[25em] mx-auto bg-primary100 rounded-2xl items-center justify-center shadow-lg">
          <Image src={LoserGame} alt="" className="justify-center" />
          <h1 className="text-white900 text-h6-semibold text-center p-4">
            ¡Sigue intentado! Cada paso en tu viaje es una oportunidad.
          </h1>
          <div className="flex flex-row gap-3 p-2">
            <div className="flex flex-row bg-primary50 rounded-lg shadow-lg w-[7em] h-[4.5em] items-center justify-center gap-1">
              <Image src={CrownOn} alt="Ranking" />
              <h2 className="text-white500 text-p1-semibold">3</h2>
            </div>
            <div className="flex flex-row bg-primary50 rounded-lg shadow-lg w-[7em] h-[4.5em] items-center justify-center gap-1">
              <Image src={PointsIcon} alt="Puntos ganados" />
              <h2 className="text-white500 text-p1-semibold">+ 15</h2>
            </div>
            <div className="flex flex-row bg-primary50 rounded-lg shadow-lg w-[7em] h-[4.5em] items-center justify-center gap-1">
              <Image src={ShieldOn} alt="Divisiones" className="m-1"/>
              <h2 className="text-white500 text-p2-semibold ">División Estrellas</h2>
            </div>
          </div>
            <div className="bg-primary50 rounded-lg p-1 shadow-lg w-full">
                <h2 className="text-p1-regular text-center w-[30vh] mx-auto text-white700" >Puedes usar tus puntos ganados en el FCI de iUpi.</h2>
            </div>
        </div>
        )}
      </div>
    );
  }
  