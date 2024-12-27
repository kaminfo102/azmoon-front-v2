import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Answer {
  questionNumber: number;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface AnswerReviewProps {
  answers: Answer[];
}

export function AnswerReview({ answers }: AnswerReviewProps) {
  return (
    <div className="space-y-4">
      {answers.map((answer) => (
        <Card key={answer.questionNumber}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                {answer.questionNumber}
              </span>
              <h3 className="text-lg font-medium">{answer.questionText}</h3>
              {answer.isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500 ml-auto" />
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>پاسخ شما:</span>
                <span className={answer.isCorrect ? 'text-green-500' : 'text-red-500'}>
                  {answer.userAnswer}
                </span>
              </div>
              {!answer.isCorrect && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>پاسخ صحیح:</span>
                  <span className="text-green-500">{answer.correctAnswer}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}