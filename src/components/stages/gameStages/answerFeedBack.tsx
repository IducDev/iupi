import { AnswerFeedbackStageProps } from ".";
import { Close } from "@mui/icons-material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { green } from "@mui/material/colors";
import { BookIcon } from "@/assets";
import Image from "next/image";

  export function AnswerFeedbackStage({ gameSelect, answer, optionSelect }: AnswerFeedbackStageProps) {
    return (
      <div className="flex flex-col">
        <div className="p-4 h-[35em] w-[25em] mx-auto bg-primary100 shadow-lg rounded-2xl">
          <div className="h-[5em]">
            {answer === gameSelect.options.findIndex((opt) => opt.value === gameSelect.answer) + 1 ? (
              <CheckCircleRoundedIcon sx={{ fontSize: 50, color: green[400] }} />
            ) : (
              <Close color="error" sx={{ fontSize: 50 }} />
            )}
          </div>
          <h1 className="text-h6-semibold text-white900 h-[5em]">{optionSelect?.value}</h1>
          <p className="h-[15vh]">{optionSelect?.description}</p>
        </div>
        <Image src={BookIcon} alt="" className="mt-[-10em] ml-20 w-[18em]" />
      </div>
    );
  }