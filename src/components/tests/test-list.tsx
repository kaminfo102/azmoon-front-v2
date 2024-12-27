import React from 'react';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { TestCard } from './test-card';
import { LoadingSpinner } from '@/components/shared/loading-spinner';

interface Test {
  id: string;
  title: string;
  description: string;
  duration: number;
  participantCount: number;
  difficulty: string;
  isFree: boolean;
  rating: number;
  image: string;
  tags: string[];
}

interface TestListProps {
  initialTests: Test[];
  pageSize: number;
}

export function TestList({ initialTests, pageSize }: TestListProps) {
  const { items: tests, loading, hasMore } = useInfiniteScroll({
    initialItems: initialTests,
    pageSize
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => (
          <TestCard
            key={test.id}
            {...test}
            href={`/tests/${test.id}`}
          />
        ))}
      </div>
      
      {loading && <LoadingSpinner />}
      
      {!hasMore && (
        <p className="text-center text-muted-foreground">
          تمام آزمون‌ها نمایش داده شده‌اند
        </p>
      )}
    </div>
  );
}
