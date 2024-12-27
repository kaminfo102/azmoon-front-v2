import React from 'react';
import { Clock, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TestCardProps {
  title: string;
  description: string;
  duration: number;
  participantCount: number;
  difficulty: 'آسان' | 'متوسط' | 'سخت';
  isFree: boolean;
  href: string;
}

export function TestCard({ 
  title, 
  description, 
  duration, 
  participantCount, 
  difficulty, 
  isFree, 
  href 
}: TestCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant={isFree ? "secondary" : "default"}>
            {isFree ? 'رایگان' : 'نیازمند اشتراک'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration} دقیقه</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{participantCount.toLocaleString('fa')} شرکت‌کننده</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            <span>{difficulty}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full group-hover:bg-primary/90">
          <a href={href}>شروع آزمون</a>
        </Button>
      </CardFooter>
    </Card>
  );
}