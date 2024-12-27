import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface ResultSummaryProps {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  timeTaken: number;
  passingScore: number;
}

export function ResultSummary({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  score,
  timeTaken,
  passingScore
}: ResultSummaryProps) {
  const isPassed = score >= passingScore;
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          نتیجه آزمون
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>پاسخ‌های درست:</span>
            <span className="font-medium text-foreground">{correctAnswers}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <XCircle className="h-5 w-5 text-red-500" />
            <span>پاسخ‌های نادرست:</span>
            <span className="font-medium text-foreground">{wrongAnswers}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <span>زمان صرف شده:</span>
            <span className="font-medium text-foreground">{formatTime(timeTaken)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="h-5 w-5" />
            <span>نمره نهایی:</span>
            <span className={`font-medium ${isPassed ? 'text-green-500' : 'text-red-500'}`}>
              {score}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}