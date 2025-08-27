import $ from 'jquery';
import product_data from "@/data/product-data";

// Get max price
export function maxPrice(): number {
  const max_price = [...product_data].reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return max_price
};


export function imageCompare() {
  document.addEventListener('DOMContentLoaded', () => {
    // Check if there are elements with the class 'beforeAfter'
    const beforeAfterElements = document.querySelectorAll<HTMLElement>('.beforeAfter');

    if (beforeAfterElements.length > 0) {
      beforeAfterElements.forEach((element) => {
        beforeAfter(element, {
          movable: true,
          clickMove: true,
          position: 50,
          separatorColor: '#fafafa',
          bulletColor: '#fafafa',
          onMoveStart: (e: Event) => {
            // your code here
          },
          onMoving: () => {
            // your code here
          },
          onMoveEnd: () => {
            // your code here
          },
        });
      });
    }
  });

  interface BeforeAfterOptions {
    movable: boolean;
    clickMove: boolean;
    position: number;
    separatorColor: string;
    bulletColor: string;
    onMoveStart: (e: Event) => void;
    onMoving: () => void;
    onMoveEnd: () => void;
  }

  // Example beforeAfter function definition for illustration purposes
  function beforeAfter(element: HTMLElement, options: BeforeAfterOptions): void {
    // Initialize your beforeAfter plugin on the element with the provided options
    // This is where you would implement your beforeAfter functionality
  }

}
