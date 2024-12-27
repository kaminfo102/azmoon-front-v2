import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  testCount?: number;
  tags?: string[];
}

export function CategoryCard({
  title,
  description,
  imageUrl,
  href,
  testCount,
  tags = []
}: CategoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full aspect-video object-cover rounded-t-lg"
            loading="lazy"
          />
          {testCount && (
            <Badge className="absolute top-4 left-4 bg-background/95">
              <GraduationCap className="w-4 h-4 ml-1" />
              {testCount} آزمون
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full group-hover:bg-primary/90" asChild>
          <a href={href}>مشاهده آزمون‌ها</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
