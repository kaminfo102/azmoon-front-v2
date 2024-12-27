import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface ResultChartProps {
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
}

export function ResultChart({ correctAnswers, wrongAnswers, skippedAnswers }: ResultChartProps) {
  const data = [
    { name: 'پاسخ‌های درست', value: correctAnswers, color: '#22c55e' },
    { name: 'پاسخ‌های نادرست', value: wrongAnswers, color: '#ef4444' },
    { name: 'بدون پاسخ', value: skippedAnswers, color: '#94a3b8' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>تحلیل پاسخ‌ها</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}