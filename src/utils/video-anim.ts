import { gsap } from "gsap";
import $ from 'jquery';
import {ScrollTrigger} from '@/plugins';

function videoAnimOne() {
	if ($('.tp-hero-bottom-img-wrap').length > 0) {
		let ms = gsap.matchMedia();
		ms.add("(min-width: 768px)", () => {
			// Home 8
			let tp_hero = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-hero-bottom-img-wrap",
					start: "top 70",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 50%",
				}
			});
			tp_hero.to(".tp-hero-bottom-img", {
				width: "100%",
			});
		});
	}
};

function videoAnimTwo() {
	if ($('.tp-video-area').length > 0) {

		const mm = gsap.matchMedia();
		mm.add("(min-width: 1400px)", () => {
			console.log('min-width: 1400px');
			let tp_hero_2 = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-video-area",
					start: "top 170",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 70%",
					// endTrigger:".tp-service-2-area"
				}
			});
			tp_hero_2.to(".tp-video-wrap", {
				width: "1110px",
				height: "560px",
			});
		});
	};


}

export {
	videoAnimOne,
	videoAnimTwo
}