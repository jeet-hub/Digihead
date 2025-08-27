import { useRef } from "react";


export function useIsotop() {
  const isotopContainer = useRef<HTMLDivElement>(null);

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesLoaded = (await import("imagesloaded")).default;

    if (!isotopContainer.current) return;

    // Initialize Isotope
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".grid-item",
      percentPosition: true,
      layoutMode: "masonry",
      masonry: {
        columnWidth: ".grid-item",
      },
    });

    // Ensure images are loaded before initializing Isotope
    imagesLoaded(isotopContainer.current, () => {
      isotope.layout();
    });

    // Filter items on button click
    const filterButtons = document.querySelectorAll<HTMLButtonElement>('.masonary-menu button');
    filterButtons.forEach(button => {
      const handleClick = (event: MouseEvent) => {
        const filterValue = button.getAttribute('data-filter') || '*';
        isotope.arrange({ filter: filterValue });

        // For menu active class
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        event.preventDefault();
      };

      button.addEventListener('click', handleClick);

      // Cleanup function to remove event listeners
      return () => {
        button.removeEventListener('click', handleClick);
      };
    });
  }

  return {
    isotopContainer,
    initIsotop,
  };
}
