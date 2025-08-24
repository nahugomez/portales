import axios from 'axios';
import { TramiteAPI } from '../types/api';
import { SearchResult } from '../types';
import { API_CONFIG } from '../config/api';
import { transformTramiteToSearchResult } from '../transformers/tramiteTransformer';

/**
 * Cliente para la API de trámites
 */
export class TramitesApiClient {
  /**
   * Realiza la petición HTTP a la API de trámites
   */
  private static async fetchTramites(
    searchTerm: string
  ): Promise<TramiteAPI[]> {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINT}/${encodeURIComponent(searchTerm.trim())}`;

    try {
      const response = await axios.get<TramiteAPI[]>(url, {
        timeout: API_CONFIG.TIMEOUT,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching tramites from API:', error);
      throw new Error('No se pudieron obtener los trámites');
    }
  }

  /**
   * Busca trámites por palabra clave
   */
  static async searchTramites(searchTerm: string): Promise<SearchResult[]> {
    if (!searchTerm.trim()) {
      return [];
    }

    const tramites = await this.fetchTramites(searchTerm);
    return tramites.map(transformTramiteToSearchResult);
  }
}
