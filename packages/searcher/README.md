# @workspace/searcher

Paquete de búsqueda para obtener trámites (y futuros servicios) desde la API pública del Gobierno de San Juan. Expone un servicio sencillo que recibe un término de búsqueda y devuelve resultados normalizados listos para usar en UI.

## Instalación

En un monorepo con pnpm:

```bash
pnpm -w add @workspace/searcher
```

O como dependencia local del paquete/app que lo usa:

```bash
pnpm add @workspace/searcher
```

Requisitos de peer dependency:

- axios ^1.6.0

## API pública

El paquete exporta:

- `searchResultsService(params)` — Servicio principal para buscar trámites.
- Tipos: `SearchConfig`, `SearchResponse`, `SearchServiceParams`, `SearchResult`.
- Tipos de API: `TramiteAPI` (estructura original devuelta por la API).
- Utilidades: `cleanHtmlText`, `generateSlug`, `createTramiteSlug` (opcionales, pensadas para uso interno o avanzado).

### searchResultsService

```ts
import { searchResultsService } from '@workspace/searcher';

const results = await searchResultsService({ input: 'licencia de conducir' });
// results: SearchResult[]
```

Parámetros (`SearchServiceParams`):

- `input` (string) — término de búsqueda. Si está vacío, devuelve `[]`.
- `tramitesResults?` (number) — no usado de momento; reservado para paginación/límites futuros.

Retorno:

- `Promise<SearchResult[]>` — lista de resultados normalizados.

Estructura de `SearchResult` (los campos pueden venir vacíos según el origen):

```ts
interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url?: string; // p.ej. /tramites/{id-slug}
  type: 'tramite' | 'servicio';
  requirements?: string;
  procedure?: string;
  phone?: string;
  schedule?: string;
  email?: string;
  web?: string;
  organization?: string;
  visits?: string;
  originalData?: any; // objeto original de la API
}
```

## Configuración

Actualmente el cliente usa valores por defecto en `src/config/api.ts`:

```ts
export const API_CONFIG = {
  BASE_URL: 'https://tramite.sanjuan.gov.ar/api',
  ENDPOINT: '/tramitebuscar/palabra',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;
```

- BASE_URL y ENDPOINT se concatenan y se agrega el término codificado.
- TIMEOUT es el tiempo máximo de la petición en milisegundos.

Nota: De momento no hay soporte para sobreescribir configuración vía env. Si lo necesitás, podés envolver el cliente o abrir un PR.

## Ejemplos de uso

### En un handler de Next.js (Route Handler / API Route)

```ts
// app/api/buscar/route.ts (Next.js 13+)
import { NextResponse } from 'next/server';
import { searchResultsService } from '@workspace/searcher';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';
  const results = await searchResultsService({ input: q });
  return NextResponse.json({ items: results, total: results.length });
}
```

### En React (cliente)

```ts
import { useEffect, useState } from 'react';
import { searchResultsService, type SearchResult } from '@workspace/searcher';

export function SearchExample() {
  const [items, setItems] = useState<SearchResult[]>([]);

  useEffect(() => {
    searchResultsService({ input: 'nacimiento' }).then(setItems);
  }, []);

  return (
    <ul>
      {items.map((r) => (
        <li key={r.id}>
          <a href={r.url}>{r.title}</a>
          {r.description && <p>{r.description}</p>}
        </li>
      ))}
    </ul>
  );
}
```

### Node.js (script)

```ts
import { searchResultsService } from '@workspace/searcher';

async function run() {
  const items = await searchResultsService({ input: 'partida' });
  console.log(items);
}

run();
```

## Notas de implementación

- Bajo el capó, se usa `axios` con `timeout` y se transforma la respuesta de la API a `SearchResult` mediante un transformer. Texto HTML es limpiado y entidades comunes son decodificadas.
- En caso de error de red o de la API, el servicio loguea el error con `console.error` y retorna `[]`.

## Desarrollo

Construcción local:

```bash
pnpm -w -F @workspace/searcher build
```

Modo watch:

```bash
pnpm -w -F @workspace/searcher dev
```

Chequeo de tipos:

```bash
pnpm -w -F @workspace/searcher type-check
```

Publicación interna (si aplica a tu flujo de trabajo):

1. Asegurate de build: `pnpm -w -F @workspace/searcher build`.
2. Versioná y publica según tu registry interno.

## Roadmap

- Soporte para servicios además de trámites
- Configuración por ambiente (env) y reintentos
- Paginación y límites por tipo
