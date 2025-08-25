import axios from 'axios';
import { API_CONFIG } from './config';
import { transformTramiteToSearchResult } from '../mappers/mapper';
import { RawTramite, SearchResult } from '../types/api';

/**
 * Cliente para la API de trámites
 */
export class Client {
  /**
   * Realiza la petición HTTP a la API de trámites
   */
  private static async fetchTramites(
    searchTerm: string
  ): Promise<RawTramite[]> {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINT}/${encodeURIComponent(searchTerm.trim())}`;

    try {
      const response = await axios.get<RawTramite[]>(url, {
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
