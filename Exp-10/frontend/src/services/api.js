// Shared API base URL for all fetch calls
export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://codehiveng.vercel.app'
  : '';
