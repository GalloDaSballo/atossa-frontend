const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const formatImageUrl = (imageUrl: string): string => {
  return `${NEXT_PUBLIC_STRAPI_URL}${imageUrl} `;
};
