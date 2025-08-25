import { SearchServiceParams, SearchResult } from '../types';
import { Client } from '../api/client';

/**
 * Servicio principal de búsqueda de trámites
 */
export const Service = async ({
  input,
  tramitesResults = 30,
}: SearchServiceParams): Promise<SearchResult[]> => {
  try {
    return await Client.searchTramites(input);
  } catch (err) {
    console.error('Error in searchResultsService:', err);
    return [];
  }
};
