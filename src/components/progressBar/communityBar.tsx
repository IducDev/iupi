"use client";
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;

}
export const GameProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="flex gap-4 justify-center items-center">

        <div className="w-[12.5em] bg-primary300 h-[4px] dark:bg-gray-300">
            <div
                className="bg-accent400 h-[4px]"
                style={{ width: `${progress}%` }}
            ></div>
        </div>

    </div>
  );
};

