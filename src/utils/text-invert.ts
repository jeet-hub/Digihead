import { gsap } from "gsap";
import { SplitText } from "@/plugins";


function textInvert() {
	if (document.querySelectorAll('.tp_text_invert').length > 0) {
		const split = new SplitText(".tp_text_invert", { type: "lines" });
		split.lines.forEach((target: any) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: "none",
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top 85%',
					end: "bottom center"
				}
			});
		});

	}
};

export {
	textInvert,
}