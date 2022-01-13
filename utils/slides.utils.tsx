export const maxSlideNumber = (slide: number) => Math.max(0, slide - 1);
export const minSlideNumber = (slide: number, slidersLength: number) => Math.min(slide + 1, slidersLength - 1);
