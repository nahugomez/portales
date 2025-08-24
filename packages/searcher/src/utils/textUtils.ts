/**
 * Mapeo de entidades HTML comunes a caracteres Unicode
 */
export const HTML_ENTITIES: Record<string, string> = {
  // Vocales con acentos
  '&aacute;': 'á',
  '&eacute;': 'é',
  '&iacute;': 'í',
  '&oacute;': 'ó',
  '&uacute;': 'ú',
  '&Aacute;': 'Á',
  '&Eacute;': 'É',
  '&Iacute;': 'Í',
  '&Oacute;': 'Ó',
  '&Uacute;': 'Ú',

  // Ñ
  '&ntilde;': 'ñ',
  '&Ntilde;': 'Ñ',

  // Umlauts
  '&uuml;': 'ü',
  '&Uuml;': 'Ü',

  // Signos de puntuación
  '&iquest;': '¿',
  '&iexcl;': '¡',

  // Comillas
  '&ldquo;': '"',
  '&rdquo;': '"',
  '&lsquo;': "'",
  '&rsquo;': "'",

  // Guiones
  '&mdash;': '—',
  '&ndash;': '–',

  // Otros
  '&hellip;': '…',
  '&nbsp;': ' ',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
};

/**
 * Limpia y formatea texto HTML removiendo tags y decodificando entidades
 */
export const cleanHtmlText = (html: string): string => {
  if (!html) return '';

  let text = html;

  // Decodificar entidades HTML
  Object.entries(HTML_ENTITIES).forEach(([entity, char]) => {
    text = text.replace(new RegExp(entity, 'g'), char);
  });

  // Eliminar tags HTML
  text = text.replace(/<[^>]*>/g, '');

  // Limpiar espacios extra y caracteres no deseados
  text = text
    .replace(/\s+/g, ' ') // Reemplazar múltiples espacios con uno solo
    .replace(/\n+/g, ' ') // Reemplazar saltos de línea con espacios
    .trim();

  return text;
};

/**
 * Genera un slug amigable para URLs
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Solo letras, números, espacios y guiones
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Remover múltiples guiones consecutivos
    .trim();
};

/**
 * Crea una URL amigable para un trámite
 */
export const createTramiteSlug = (id: string, titulo: string): string => {
  const slug = generateSlug(titulo);
  return `${id}-${slug}`;
};
