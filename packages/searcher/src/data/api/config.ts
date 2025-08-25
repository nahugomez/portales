/**
 * Configuración de la API de búsqueda de trámites
 */
export const API_CONFIG = {
  BASE_URL: 'https://tramite.sanjuan.gov.ar/api',
  ENDPOINT: '/tramitebuscar/palabra',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;
