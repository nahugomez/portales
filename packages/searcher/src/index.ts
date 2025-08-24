// Exportar el servicio principal
export { searchResultsService } from './services/searchService';

// Exportar tipos
export type {
  SearchConfig,
  SearchResponse,
  SearchServiceParams,
  SearchResult,
} from './types';

// Exportar tipos de API
export type { TramiteAPI } from './types/api';

// Exportar utilidades (opcional, para uso interno)
export {
  cleanHtmlText,
  generateSlug,
  createTramiteSlug,
} from './utils/textUtils';
