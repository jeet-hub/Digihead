import $ from "jquery";
import { gsap, Power2 } from "gsap";
function hoverBtn() {

  $('.tp-hover-btn').on('mouseenter', function (e: any) {
    let x = e.pageX - $(this).offset()!.left;
    let y = e.pageY - $(this).offset()!.top;

    $(this).find('.tp-btn-circle-dot').css({
      top: y,
      left: x
    });
  });

  $('.tp-hover-btn').on('mouseout', function (e: any) {
    let x = e.pageX - $(this).offset()!.left;
    let y = e.pageY - $(this).offset()!.top;

    $(this).find('.tp-btn-circle-dot').css({
      top: y,
      left: x
    });
  });

  const hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

  const hoverBtnItem: any = gsap.utils.toArray(".tp-hover-btn-item");
  hoverBtns.forEach((btn: any, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e: any) {
      parallaxIt(e, hoverBtnItem[i], 60);
    }

    function parallaxIt(e: any, target: any, movement: any) {
      const $this: any = $(btn);
      const relX = e.pageX - $this.offset().left;
      const relY = e.pageY - $this.offset().top;

      gsap.to(target, 1, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(hoverBtnItem[i], 1, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
};


export {
  hoverBtn,
}
