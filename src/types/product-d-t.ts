import { StaticImageData } from "next/image";

export interface IProductDT {
  id: number;
  category: string;
  title: string;
  price: number;
  img: StaticImageData;
  relatedImages: StaticImageData[];
}