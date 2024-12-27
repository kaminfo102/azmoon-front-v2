import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns-jalali';

interface TestResult {
  id: string;
  testName: string;
  date: Date;
  score: number;
  passed: boolean;
  category: string;
}

interface TestHistoryProps {
  results: TestResult[];
}

export function TestHistory({ results }: TestHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>تاریخچه آزمون‌ها</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {results.map((result) => (
            <div
              key={result.id}
              className="flex items-center justify-between p-4 rounded-lg border"
            >
              <div>
                <h3 className="font-medium">{result.testName}</h3>
                <p className="text-sm text-muted-foreground">{result.category}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDistanceToNow(result.date, { locale: 'fa' })} پیش
                </p>
              </div>
              <div className="text-left">
                <div className="mb-2">
                  <Badge variant={result.passed ? "default" : "destructive"}>
                    {result.passed ? 'قبول' : 'مردود'}
                  </Badge>
                </div>
                <p className="text-sm font-medium">
                  نمره: {result.score}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}