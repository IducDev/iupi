import { IntroStage } from "./introStage";
import { QuestionStage } from "./questionStages";
import { KnowledgeStage } from "./knowlevelStage";
import { AnswerFeedbackStage } from "./answerFeedBack";
import { ResultStage } from "./resultStages";

export{
    IntroStage, QuestionStage,
    KnowledgeStage,AnswerFeedbackStage,ResultStage
}

export interface GameOption {
    value: string;
    description: string;
  }
  
export interface GameSelect {
    question: string;
    options: GameOption[];
    answer: string;
  }
  
export interface QuestionStageProps {
      gameSelect: GameSelect | null;
      setAnswer: (answer: number) => void;
      setOptionSelect: (option: GameOption) => void;
      setStage: (stage: number) => void;
      onSelectAnswer: (index: number, option: { value: string; description: string }) => void; // Aquí
    }  

    
export interface AnswerFeedbackStageProps {
    gameSelect: GameSelect;
    answer: number;
    optionSelect: GameOption | null;
  }
  
export interface ResultStageProps {
    gameSelect: GameSelect;
    answer: number;
  }