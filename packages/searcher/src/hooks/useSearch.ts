import { useEffect, useState } from 'react';
import { useDebouncedValue } from './useDebouncedValue';
import { Service } from '../data/services/service';
import type { RawTramite } from '../data/types/api';

type SearchItem = {
  id: string;
  title: string;
  description?: string;
  url?: string;
};

function mapTramiteToItem(t: RawTramite): SearchItem {
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
        const res = await Service({ input: debounced.trim() });
        const list = (res as unknown as RawTramite[]).map(mapTramiteToItem);
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
