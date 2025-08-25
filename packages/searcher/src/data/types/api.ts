/**
 * Interfaz para los datos de trámite que vienen de la API
 */
export interface RawTramite {
  id: string;
  titulo: string;
  descripcion: string;
  requisitos: string;
  procedimiento: string;
  observaciones: string;
  telefono: string;
  horario: string;
  costo: string;
  email: string;
  web: string;
  online: string | null;
  nombreorganismo: string;
  visitas: string;
}

export interface SearchConfig {
  site: string;
  input: string;
  results: number;
}

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url?: string;
  type: 'tramite' | 'servicio';
  requirements?: string;
  procedure?: string;
  phone?: string;
  schedule?: string;
  email?: string;
  web?: string;
  organization?: string;
  visits?: string;
  originalData?: any;
  [key: string]: any;
}

export interface SearchResponse {
  items: SearchResult[];
  total?: number;
  [key: string]: any;
}

export interface SearchServiceParams {
  input: string;
  tramitesResults?: number;
  serviciosResults?: number;
}
