import React from 'react';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { CategoryCard } from './category-card';
import { LoadingSpinner } from '@/components/shared/loading-spinner';

interface Category {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  testCount: number;
  tags: string[];
}

interface CategoryListProps {
  initialCategories: Category[];
  pageSize: number;
}

export function CategoryList({ initialCategories, pageSize }: CategoryListProps) {
  const { items: categories, loading, hasMore } = useInfiniteScroll({
    initialItems: initialCategories,
    pageSize
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
            href={`/categories/${category.id}`}
            testCount={category.testCount}
            tags={category.tags}
          />
        ))}
      </div>
      
      {loading && <LoadingSpinner />}
      
      {!hasMore && (
        <p className="text-center text-muted-foreground">
          تمام دسته‌بندی‌ها نمایش داده شده‌اند
        </p>
      )}
    </div>
  );
}
