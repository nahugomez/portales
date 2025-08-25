import { useEffect, useState } from 'react';
import { useDebouncedValue } from './useDebouncedValue';
import { searchResultsService } from '../services/searchService';
import type { TramiteAPI } from '../types/api';

type SearchItem = {
  id: string;
  title: string;
  description?: string;
  url?: string;
};

function mapTramiteToItem(t: TramiteAPI): SearchItem {
  return {
    id: t.id,
    title: t.titulo,
    description: t.descripcion || t.requisitos || t.procedimiento || undefined,
    url: t.web || undefined,
  };
}

export function useSearch(opts?: { minChars?: number; debounceMs?: number }) {
  const minChars = opts?.minChars ?? 2;
  const debounceMs = opts?.debounceMs ?? 250;

  const [query, setQuery] = useState('');
  const [items, setItems] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);

  const debounced = useDebouncedValue(query, debounceMs);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (debounced.trim().length < minChars) {
        setItems([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const res = await searchResultsService({ input: debounced.trim() });
        const list = (res as unknown as TramiteAPI[]).map(mapTramiteToItem);
        if (!cancelled) setItems(list);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [debounced, minChars]);

  return {
    query,
    setQuery,
    items,
    loading,
    canSearch: query.trim().length >= minChars,
  };
}
