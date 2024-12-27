import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface TestProgressProps {
  current: number;
  total: number;
  totalTime: number;
  onTimeExpired: () => void; // Callback function for time expiration
}

export function TestProgress({ current, total, totalTime, onTimeExpired }: TestProgressProps) {
  const progress = (current / total) * 100;
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    let intervalId: number;
      if (timeLeft > 0) {
          intervalId = setInterval(() => {
              setTimeLeft((prevTime) => prevTime - 1);
          }, 1000);
      } else {
        onTimeExpired(); // Call the callback when time expires
      }


    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeExpired]);


  const timeProgress = (timeLeft / totalTime) * 100;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-[3.5rem] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container py-4">
        <div className="flex justify-between items-center mb-2 text-sm">
          <span>سوال {current} از {total}</span>
          <span className="text-muted-foreground">زمان باقی‌مانده: {formatTime(timeLeft)}</span>
        </div>
        <div className="grid gap-2">
          <Progress value={progress} className="h-2" />
          <Progress value={timeProgress} className="h-1" />
        </div>
      </div>
    </div>
  );
}
