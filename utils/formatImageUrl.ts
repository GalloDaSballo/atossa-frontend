export const formatImageUrl = (imageUrl: string): string => {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl} `;
};
