import Image from "next/image";
import { BookIcon , BookImg } from "@/assets";

export function KnowledgeStage() {
    return (
      <div>
        <div className="flex flex-col gap-5 bg-primary100 h-[35.25em] w-[25em] mx-auto p-2 rounded-2xl items-center justify-center shadow-lg">
          <Image src={BookImg} alt="" />
          <h1 className="text-p1-bold text-white900 w-[40vh] text-center">
            Cada bit de conocimiento que adquieras te acerca más a la libertad financiera.
          </h1>
        </div>
        <Image src={BookIcon} alt="" className="mt-[-10em] ml-[13em] w-[18em]" />
      </div>
    );
  }