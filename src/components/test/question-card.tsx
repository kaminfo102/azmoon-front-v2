import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Option {
    id: string;
    text: string;
}

interface QuestionCardProps {
    number: number;
    text: string;
    options: Option[];
    selectedOption?: string;
    onSelect: (optionId: string, questionNumber: number) => void; // تغییر پارامتر
}


export function QuestionCard({ number, text, options, selectedOption, onSelect }: QuestionCardProps) {
    const [selected, setSelected] = useState<string | undefined>(undefined);

      // useEffect برای تنظیم مقدار selected در صورت تغییر selectedOption از بیرون
      useEffect(() => {
          setSelected(selectedOption);
      }, [selectedOption]);

    const handleSelect = (optionId: string) => {
        setSelected(optionId);
        onSelect(optionId, number);
    };

    return (
        <Card className="mb-6">
            <CardHeader>
                <div className="flex items-center gap-2 text-lg font-medium text-right">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                        {number}
                    </span>
                    <h3 className="flex-1">{text}</h3>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={cn(
                                'flex items-center justify-between border-2 border-gray-300 hover:border-primary transition-colors duration-200 rounded-lg p-4 cursor-pointer',
                                selected === option.id && 'border-primary bg-primary/10'
                            )}
                        >
                            <span className="flex-1 text-right">{option.text}</span>
                            {selected === option.id && <Check className="w-5 h-5 text-primary" />}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
