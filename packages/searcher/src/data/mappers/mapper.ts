import { RawTramite } from '../types';
import { SearchResult } from '../types';
import { cleanHtmlText, createTramiteSlug } from '../../utils/text';

/**
 * Transforma un trámite de la API al formato de respuesta
 */
export const transformTramiteToSearchResult = (
  tramite: RawTramite
): SearchResult => {
  return {
    id: tramite.id,
    title: tramite.titulo,
    description: cleanHtmlText(tramite.descripcion),
    url: `/tramites/${createTramiteSlug(tramite.id, tramite.titulo)}`,
    type: 'tramite' as const,
    requirements: cleanHtmlText(tramite.requisitos),
    procedure: cleanHtmlText(tramite.procedimiento),
    phone: tramite.telefono,
    schedule: tramite.horario,
    email: tramite.email,
    web: tramite.web,
    organization: tramite.nombreorganismo,
    visits: tramite.visitas,
    originalData: tramite,
  };
};
