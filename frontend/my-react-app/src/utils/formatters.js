
export const formatScore = (score) => {
  if (score === null || score === undefined) return '0';
  return Number(score).toLocaleString();
};

/**
 * Formats a standard ISO timestamp or Date object into a readable date string.
 * Example: "2026-07-11T18:47:00Z" -> "July 11, 2026"
 */
export const formatDate = (dateString) => {
  if (!dateString) return '---';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Capitalizes text strings for clean status badge headers or UI tags.
 * Example: "game_over" or "GAME_OVER" -> "Game Over"
 */
export const formatLabel = (slug) => {
  if (!slug) return '';
  return slug
    .toLowerCase()
    .split(/[_\-\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Pads numbers for countdown timers or formal scoreboards.
 * Example: 7 -> "07"
 */
export const formatTwoDigits = (number) => {
  if (number === null || number === undefined) return '00';
  return String(number).padStart(2, '0');
};