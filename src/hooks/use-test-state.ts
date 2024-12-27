import { useState } from 'react';

interface Answer {
  questionId: string;
  selectedOption: string;
}

export function useTestState(totalQuestions: number) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === questionId);
      if (existing) {
        return prev.map(a => a.questionId === questionId ? { ...a, selectedOption: optionId } : a);
      }
      return [...prev, { questionId, selectedOption: optionId }];
    });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return {
    currentQuestion,
    answers,
    isComplete,
    handleAnswer,
    handleNext,
    handlePrevious
  };
}