import Image from "next/image";
import { BookImg, BookIcon } from "@/assets";

export function IntroStage() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col gap-5 bg-primary100 h-[35.25em] w-[25em] mx-auto p-2 rounded-2xl items-center justify-center shadow-lg">
          <Image src={BookImg} alt="" />
          <h1 className="text-p1-bold text-white900 w-[30vh] text-center">
            ¿Sabías que Stocks y Acciones significan lo mismo?
          </h1>
        </div>
        <Image src={BookIcon} alt="" className="mt-[-10em] ml-20 w-[18em]" />
      </div>
    );
  }