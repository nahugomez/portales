import { SearchServiceParams, SearchResult } from '../types';
import { TramitesApiClient } from '../clients/tramitesApiClient';

/**
 * Servicio principal de búsqueda de trámites
 */
export const searchResultsService = async ({
  input,
  tramitesResults = 30,
}: SearchServiceParams): Promise<SearchResult[]> => {
  try {
    return await TramitesApiClient.searchTramites(input);
  } catch (err) {
    console.error('Error in searchResultsService:', err);
    return [];
  }
};
