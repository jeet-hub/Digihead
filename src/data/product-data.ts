import { IProductDT } from '@/types/product-d-t';


import product_1 from '@/assets/img/inner-shop/product/product-2.jpg';
import product_2 from '@/assets/img/inner-shop/product/product-3.jpg';
import product_3 from '@/assets/img/inner-shop/product/product-4.jpg';
import product_4 from '@/assets/img/inner-shop/product/product-9.jpg';
import product_5 from '@/assets/img/inner-shop/product/product-6.jpg';
import product_6 from '@/assets/img/inner-shop/product/product-7.jpg';
import product_7 from '@/assets/img/inner-shop/product/product-8.jpg';
import product_8 from '@/assets/img/inner-shop/product/product-10.jpg';
import product_9 from '@/assets/img/inner-shop/product/product-11.jpg';
import product_10 from '@/assets/img/inner-shop/product/product-12.jpg';




const product_data:IProductDT[] = [
  {
    id: 1,
    category: 'Tennis',
    title:'Black Tennis Shoe',
    price: 225,
    img: product_1,
    relatedImages: [product_1, product_2, product_3, product_4],
  },
  {
    id: 2,
    category: 'Tennis',
    title:'Red Tennis Shoe',
    price: 125,
    img: product_2,
    relatedImages: [product_2, product_3, product_4, product_5],
  },
  {
    id: 3,
    category: 'Tennis',
    title:'Men Tennis Shoe',
    price: 599,
    img: product_3,
    relatedImages: [product_3, product_4, product_5, product_6],
  },
  {
    id: 4,
    category: 'Tennis',
    title:'Women Tennis Shoe',
    price: 488,
    img: product_4,
    relatedImages: [product_4, product_5, product_6, product_7],
  },
  {
    id: 5,
    category: 'Tennis',
    title:'xtreme Tennis Shoe',
    price: 359,
    img: product_5,
    relatedImages: [product_5, product_6, product_7, product_8],
  },
  {
    id: 6,
    category: 'Tennis',
    title:'Women Tennis Shoe',
    price: 400,
    img: product_6,
    relatedImages: [product_6, product_7, product_8, product_9],
  },
  {
    id: 7,
    category: 'Cricket', 
    title:'Men Cricket Shoe',
    price: 599,
    img: product_7,
    relatedImages: [product_7, product_8, product_9, product_10],
  },
  {
    id: 8,
    category: 'Cricket', 
    title:'Women Cricket Shoe',
    price: 650,
    img: product_8,
    relatedImages: [product_8, product_9, product_10, product_1],
  },
  {
    id: 9,
    category: 'Football', 
    title:'Men Football Shoe',
    price: 700,
    img: product_9,
    relatedImages: [product_9, product_10, product_1, product_2],
  },
  {
    id: 10,
    category: 'Football', 
    title:'Women Football Shoe',
    price: 750,
    img: product_10,
    relatedImages: [product_10, product_1, product_2, product_3],
  },
  {
    id: 11,
    category: 'Tennis', 
    title:'Men Tennis Shoe',
    price: 599,
    img: product_1,
    relatedImages: [product_1, product_2, product_3, product_4],
  },
  {
    id: 12,
    category: 'Tennis', 
    title:'Women Tennis Shoe',
    price: 400,
    img: product_2,
    relatedImages: [product_2, product_3, product_4, product_5],
  }
];

export default product_data;