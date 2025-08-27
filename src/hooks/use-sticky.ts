'use client'
import { useEffect, useRef, useState } from "react";
import $ from "jquery";


const useSticky = () => {
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const stickyHeader = (): void => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };


  useEffect(() => {
    const setHeaderHeight = headerRef.current?.offsetHeight;

    if (setHeaderHeight) {
      const headerElements = document.querySelectorAll<HTMLDivElement>('.tp-header-height');
      headerElements.forEach(element => {
        console.log('setHeaderHeight', setHeaderHeight,element);
        element.style.height = `${setHeaderHeight}px`;
      });
    }
  }, []);

  function headerFullWidth () {
    const menuElements = document.querySelectorAll(".tp-menu-fullwidth");
    menuElements.forEach((element: Element) => {
      const previousDiv = element.parentElement?.parentElement;
      if (previousDiv) {
        previousDiv.classList.add("has-homemenu");
      }
    });
  };

  function adjustMenuBackground() {
    if ($('.tp-header-3-area').length > 0) {
      const menuBox = $('.tp-header-3-menu-box');
      const menuBoxWidth = menuBox.width()!;
      const menuBoxHeight = menuBox.height()!;
      $('.menu-bg').css({
        'width': menuBoxWidth + 46,
        'height': menuBoxHeight,
        'left': menuBox.offset()!.left
      })
    }
  }
  


  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);

    return (): void => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
    headerRef,
    headerFullWidth,
    adjustMenuBackground,
  };
};

export default useSticky;
