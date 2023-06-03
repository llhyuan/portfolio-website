export const projects = [
  {
    id: 0,
    name: 'Portfolio template',
    image: '../assets/project-image/portfolio.png',
    github: 'https://github.com/llhyuan/portfolio-website',
    livesite: 'https://llhyuan.github.io/portfolio-website/',
    content:
      'This is a geeky personal portfolio inspired by neovim and gruvbox material. It can be easily cutomized to fit in your own narrative.',
    points: [
      '100% self-written, reusable components to mitigate to the repetitive clottering mess of tailwinds.',
      'React hooks (useRef and useEffect) are paired up with intersection observer to  achieve the dynamic nav section, reacting to page scroll.',
      'A sprinkle of JavaScript and some dark magic is used for the easter egg animation in the navbar.',
    ],
    'Tech/Tools': [
      'react',
      'javascript',
      'tailwindcss',
      'reusable react components',
      'gsap'
    ],
  },
  {
    id: 1,
    name: 'Space Tourism Website',
    image: '../assets/project-image/space.png',
    github: 'https://github.com/llhyuan/Space-tourism-website',
    livesite: 'https://llhyuan.github.io/Space-tourism-website/',
    content:
      'This is a fully resposive website built with a mobile-first approach.',
    points: [
      'Client side routing done with React Router',
      'Website data fetch asynchronously with React Router hooks',
      'Communication among components managed with useContext and useEffect',
    ],
    'Tech/Tools': ['scss', 'react', 'react router', 'fontawsome'],
  },
  {
    id: 2,
    name: 'Responsive Pricing Component',
    image: '../assets/project-image/component.png',
    github: 'https://github.com/llhyuan/Pricing-component',
    livesite: 'https://llhyuan.github.io/Pricing-component/',
    content:
      'This is a fully responsive pricing component that let users check out and interact with product price intuitively and with ease.',
    points: [],
    'Tech/Tools': ['html', 'scss', 'react', 'emotion', 'unstyled material ui'],
  },
  {
    id: 3,
    name: 'Gift Shop Landing Page',
    image: '../assets/project-image/giftshop.png',
    github: 'https://github.com/llhyuan/gift-shop',
    livesite: 'https://llhyuan.github.io/gift-shop/',
    content:
      'This is a landing page for a nail salon new in the neighbourhood, coded up with html and vanila css.',
    points: [],
    'Tech/Tools': ['html', 'vanila css'],
  },
];
