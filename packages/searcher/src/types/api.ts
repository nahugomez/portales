/**
 * Interfaz para los datos de trámite que vienen de la API
 */
export interface TramiteAPI {
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
