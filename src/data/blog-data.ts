import { IBlogDT } from "@/types/blog-d-t";

// blog images

// home 5
import blog_1 from "@/assets/img/home-05/blog/blog-1.jpg";
import blog_2 from "@/assets/img/home-05/blog/blog-2.jpg";
import blog_3 from "@/assets/img/home-05/blog/blog-3.jpg";
import blog_4 from "@/assets/img/home-05/blog/blog-4.jpg";
// blog modern 
import b_m_1 from "@/assets/img/inner-blog/blog-standard/blog-1.jpg";
import b_m_2 from "@/assets/img/inner-blog/blog-standard/blog-2.jpg";
import b_m_3 from "@/assets/img/inner-blog/blog-standard/blog-3.jpg";
import b_m_4 from "@/assets/img/inner-blog/blog-standard/blog-4.jpg";
import b_m_5 from "@/assets/img/inner-blog/blog-standard/blog-5.jpg";
import b_m_6 from "@/assets/img/inner-blog/blog-standard/blog-6.jpg";
import b_m_7 from "@/assets/img/inner-blog/blog-standard/blog-7.jpg";

// avatar
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-1.jpg";

// blog postbox img
import blog_post_1 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-1.jpg';
import blog_post_2 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-2.jpg';
import blog_post_3 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-3.jpg';
import blog_post_4 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-4.jpg';

// blog list images
import blog_list_1 from '@/assets/img/inner-blog/blog-right-sidebar/blog-1.jpg';
import blog_list_2 from '@/assets/img/inner-blog/blog-right-sidebar/blog-2.jpg';
import blog_list_3 from '@/assets/img/inner-blog/blog-right-sidebar/blog-3.jpg';
import blog_list_4 from '@/assets/img/inner-blog/blog-right-sidebar/blog-4.jpg';
import blog_list_5 from '@/assets/img/inner-blog/blog-right-sidebar/blog-5.jpg';



export const blog_home_five: IBlogDT[] = [
  {
    id: 1,
    img: blog_1,
    title: "Future Business Ideas.",
    date: '01. FEB. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 2,
    img: blog_2,
    title: "Start Unique Experience.",
    date: '09. MAY. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 3,
    img: blog_3,
    title: "Is It Time To Rebrand?",
    date: '30. AUG. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 4,
    img: blog_4,
    title: "Setting up the creativity.",
    date: '11. JAN. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  }
];


export const blog_modern: IBlogDT[] = [
  {
    id: 5,
    img: b_m_1,
    title: 'Our New Projects With <br> Local Community',
    date: '21. OCT. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 6,
    img: b_m_2,
    title: 'Future Business Ideas.',
    date: '01. FEB. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 7,
    img: b_m_3,
    title: 'Start Unique Experience.',
    date: '09. MAY. 2022',
    category: 'Branding / Creative',
    author: 'John Doe',
  },
  {
    id: 8,
    img: b_m_4,
    title: 'Is It Time To Rebrand?',
    date: '30. AUG. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 9,
    img: b_m_5,
    title: 'Setting up the creativity.',
    date: '11. JAN. 2022',
    category: 'Branding / Creative',
    author: 'John Doe',
  },
  {
    id: 10,
    img: b_m_6,
    title: 'Design to remember',
    date: '15. OCT. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 11,
    img: b_m_7,
    title: 'Endless Road Stories',
    date: '20. NOV. 2023',
    category: 'Branding / Strategy',
    author: 'John Doe',
  },

  {
    id: 12,
    img: b_m_2,
    title: 'Future Business Ideas.',
    date: '01. FEB. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 13,
    img: b_m_5,
    title: 'Start Unique Experience.',
    date: '09. MAY. 2022',
    category: 'Branding / Creative',
    author: 'John Doe',
  },
  {
    id: 14,
    img: b_m_4,
    title: 'Is It Time To Rebrand?',
    date: '30. AUG. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
];


export const blog_classic: IBlogDT[] = [
  {
    id: 15,
    title: "Relax while learning design and Be Connected",
    date: '27 JULY, 2022',
    category: 'BRANDING',
    author: 'Mark Hopkins',
    avatar: avatar,
    blogHeroSlider: true,
  },
  {
    id: 16,
    title: "Relax while learning design and Be Connected",
    date: '15 JUN, 2023',
    category: 'DESIGN',
    author: 'John Vincent',
    avatar: avatar,
    blogHeroSlider: true,
  },
  {
    id: 17,
    img: blog_post_1,
    title: "Design To Remember",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '01 DEC, 2022',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
  {
    id: 18,
    img: blog_post_2,
    title: "Desert Treasure Hunt",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '12 OCT, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
    video: true,
    videoId: 'rVHxkxJM3rY'
  },
  {
    id: 19,
    blogQuoteTwo: true,
    title: "MERGE DIFFERENT TO CREATE A PERFECT <br/> PLAYLIST FOR EACH.",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '01 DEC, 2022',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
  {
    id: 20,
    imgSlider: true,
    images: [blog_post_1, blog_post_2, blog_post_3],
    title: "Future Business Ideas.",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '08 NOV, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
  {
    id: 21,
    blogQuote: true,
    title: "SEM SMITH, CREATIVE DIRECTOR",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,uyam erat.!',
    date: '12 OCT, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
  {
    id: 22,
    img: blog_post_4,
    title: "Simplistic photo setup",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '18 DEC, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
];


export const blog_lists: IBlogDT[] = [
  {
    id: 23,
    img: blog_list_1,
    title: "Design To Remember",
    date: '01 DEC, 2023',
    category: 'Marketing',
    author: 'John Doe',
  },
  {
    id: 24,
    img: blog_list_2,
    title: "Simplistic photo setup",
    date: '09. MAY. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
  {
    id: 25,
    img: blog_list_3,
    title: "Future Business Ideas.",
    date: '20. NOV. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
  {
    id: 26,
    img: blog_list_4,
    title: "Is It Time To Rebrand?",
    date: '30. AUG. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
  {
    id: 27,
    img: blog_list_5,
    title: "Desert Treasure Hunt",
    date: '09. MAY. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
  {
    id: 28,
    img: blog_list_2,
    title: "Visualizing Your Brand",
    date: '12. JAN. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
];

export const blog_data: IBlogDT[] = [
  ...blog_lists,
  ...blog_home_five,
  ...blog_modern,
  ...blog_classic,
]

