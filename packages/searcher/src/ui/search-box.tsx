'use client';

// React
import * as React from 'react';

// Utilities
import { cn } from '@workspace/ui/lib/utils';

// UI
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@workspace/ui/components/input';
import { Button } from '@workspace/ui/components/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@workspace/ui/components/popover';
import {
  Command,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from '@workspace/ui/components/command';

// Hooks
import { useSearch } from '../hooks/useSearch';

// Types
import { SearchBoxProps, SearchItem } from '../public/types';

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = '¿Qué trámite o servicio estás buscando?',
  autoFocus,
  minChars,
  debounceMs,
  defaultQuery = '',
  onSubmit,
  onSelectResult,
  navigateTo,
  className,
  renderItem,
}) => {
  const { query, setQuery, items, loading, canSearch } = useSearch({
    minChars,
    debounceMs,
  });
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (defaultQuery) setQuery(defaultQuery);
  }, [defaultQuery, setQuery]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) await onSubmit(query);
  };

  const handleSelect = async (item: SearchItem) => {
    if (onSelectResult) await onSelectResult(item);
    if (navigateTo && item.url) navigateTo(item);
    setOpen(false);
  };

  return (
    <div className={cn('w-full max-w-xl', className)}>
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Buscador de trámites y servicios"
      >
        <div className="relative">
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            placeholder={placeholder}
            autoFocus={autoFocus}
            aria-autocomplete="list"
            aria-expanded={open}
            className="pr-10"
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1 h-8 w-8"
            aria-label="Buscar"
            disabled={!canSearch && !query}
          >
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </form>

      <Popover
        open={
          open &&
          (loading || items.length > 0 || query.length >= (minChars ?? 2))
        }
        onOpenChange={setOpen}
      >
        <PopoverTrigger asChild>
          <span className="sr-only">Abrir sugerencias</span>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-[var(--radix-popover-trigger-width,24rem)] p-0"
        >
          <Command shouldFilter={false}>
            <CommandList className="max-h-80">
              {!loading && items.length === 0 ? (
                <CommandEmpty>
                  {query.length < (minChars ?? 2)
                    ? 'Escribe para buscar…'
                    : 'Sin resultados'}
                </CommandEmpty>
              ) : (
                <CommandGroup heading={loading ? 'Buscando…' : 'Resultados'}>
                  {items.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.title}
                      onSelect={() => handleSelect(item)}
                    >
                      {renderItem ? (
                        renderItem(item)
                      ) : (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                          {item.description && (
                            <span className="text-xs text-muted-foreground line-clamp-2">
                              {item.description}
                            </span>
                          )}
                        </div>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
