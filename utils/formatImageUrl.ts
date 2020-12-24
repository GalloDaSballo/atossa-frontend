const STRAPI_URL = process.env.STRAPI_URL;

export const formatImageUrl = (imageUrl: string): string => {
  return `${STRAPI_URL}${imageUrl} `;
};
