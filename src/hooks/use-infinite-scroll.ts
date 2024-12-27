
import { useState, useEffect, useCallback } from 'react';

interface UseInfiniteScrollProps<T> {
  initialItems: T[];
  pageSize: number;
  fetchMore?: () => Promise<T[]>;
}

export function useInfiniteScroll<T>({ initialItems, pageSize, fetchMore }: UseInfiniteScrollProps<T>) {
  const [items, setItems] = useState<T[]>(initialItems);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      if (fetchMore) {
        const newItems = await fetchMore();
        if (newItems.length < pageSize) {
          setHasMore(false);
        }
        setItems(prev => [...prev, ...newItems]);
      } else {
        // For static data, simulate pagination
        const start = page * pageSize;
        const end = start + pageSize;
        const newItems = initialItems.slice(start, end);
        
        if (newItems.length < pageSize) {
          setHasMore(false);
        }
        setItems(prev => [...prev, ...newItems]);
      }
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Error loading more items:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, pageSize, fetchMore, initialItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  return { items, loading, hasMore };
}
