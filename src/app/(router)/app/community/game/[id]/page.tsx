"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import useGameStore from "@/store/community/gameEducation";
import { EducationActiveLarge } from "@/assets";
import { IntroStage, QuestionStage, AnswerFeedbackStage, KnowledgeStage, ResultStage } from "@/components/stages/gameStages/index";

export default function GameEducation() {
  const params = useParams();
  const router = useRouter();
  const [id, setId] = useState<number>(0);
  const games = useGameStore((state) => state.games);
  const gameSelect = games?.[id] ?? null;
  const [answer, setAnswer] = useState<number | null>(null);
  const [optionSelect, setOptionSelect] = useState<{ value: string; description: string } | null>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (params.id) setId(Number(params.id));

    if (stage === 1) return;

    if (stage < 4) {
      const timer = setTimeout(() => setStage((prev) => prev + 1), 4500);
      return () => clearTimeout(timer);
    }

    if (stage === 4) {
      const redirectTimer = setTimeout(() => {
        router.push("/app/community"); 
      }, 5000);
      return () => clearTimeout(redirectTimer);
    }
  }, [stage, params.id, router]);

  const handleAnswerSelect = (index: number, option: { value: string; description: string }) => {
    setAnswer(index + 1);
    setOptionSelect(option);
    setStage(2);
  };

  return (
    <div>
      <Link href="/app/community">
        <Image src={EducationActiveLarge} alt="Education Game" className="p-1 pt-3 pb-6 mx-auto" />
      </Link>

      {stage === 0 && <IntroStage />}
      {stage === 1 && gameSelect && (
        <QuestionStage 
          gameSelect={gameSelect} 
          onSelectAnswer={handleAnswerSelect} 
          setAnswer={setAnswer} 
          setOptionSelect={setOptionSelect} 
          setStage={setStage} 
        />
      )}
      {stage === 2 && gameSelect && answer !== null && <AnswerFeedbackStage gameSelect={gameSelect} answer={answer} optionSelect={optionSelect} />}
      {stage === 3 && <KnowledgeStage />}
      {stage === 4 && gameSelect && answer !== null && <ResultStage gameSelect={gameSelect} answer={answer} />}
    </div>
  );
}
