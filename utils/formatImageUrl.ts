/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image 
 */
export const fromImageToUrl = (image: string): string => {
  if (!image){
      return "/donate-header.jpg"
  }

  if (image.indexOf("/") === 0){
      return `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`
  }

  return image
}

export const formatImageUrl = (imageUrl: string): string => {
  return fromImageToUrl(imageUrl)
};
