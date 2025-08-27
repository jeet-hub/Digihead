import $ from 'jquery';
import { gsap } from 'gsap';
import { SplitText,chroma } from '@/plugins';

function ctaAnimation() {
  if ($('.cta-text').length > 0) {

		let cta = gsap.timeline({
			repeat: -1,
			delay: 0.5,
			scrollTrigger: {
				trigger: '.cta-text',
				start: 'bottom 100%-=50px'
			}
		});
		gsap.set('.cta-text', {
			opacity: 0
		});
		gsap.to('.cta-text', {
			opacity: 1,
			duration: 1,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: '.cta-text',
				start: 'bottom 100%-=50px',
				once: true
			}
		});
	
		let mySplitText = new SplitText(".cta-text", { type: "words,chars" });
		let chars = mySplitText.chars;
    let endGradient: any = (chroma as any).scale(['#FFB55E', '#F25164', '#7F00D7', '#EC38BC', '#F25164']);
		cta.to(chars, {
			duration: 0.5,
			scaleY: 0.6,
			ease: "power1.out",
			stagger: 0.04,
			transformOrigin: 'center bottom'
		});
		cta.to(chars, {
			yPercent: -20,
			ease: "elastic",
			stagger: 0.03,
			duration: 0.8
		}, 0.5);
		cta.to(chars, {
			scaleY: 1,
			ease: "elastic.out",
			stagger: 0.03,
			duration: 1.5
		}, 0.5);
		cta.to(chars, {
			color: (i, el, arr) => {
				return endGradient(i / arr.length).hex();
			},
			ease: "power1.out",
			stagger: 0.03,
			duration: 0.3
		}, 0.5);
		cta.to(chars, {
			yPercent: 0,
			ease: "back",
			stagger: 0.03,
			duration: 0.8
		}, 0.7);
		cta.to(chars, {
			color: '#fff',
			duration: 1.4,
			stagger: 0.05
		});
	}
};

export {
  ctaAnimation,
}