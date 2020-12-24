/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
  if (!image){
      return "/donate-header.jpg"
  }

  if (image.url.indexOf("/") === 0){
      return `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`
  }

  return image.url
}

export const formatImageUrl = (imageUrl: string): string => {
  return fromImageToUrl(imageUrl)
};
