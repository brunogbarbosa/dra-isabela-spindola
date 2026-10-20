export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export type Result = { image: string; label: string; alt: string; orientation: 'horizontal' | 'vertical' | 'single'; beforeShare: number; comparisonRatio: number };

export const whatsappMessage = 'Oi, tudo bem? Vim pelo site e gostaria de entender qual procedimento é ideal para mim. 😊';

// Shared brand tokens. All section colors and decorative colors derive from these.
export const brandColors = {
  paper: '#F5F0E8',
  ink: '#292820',
  taupe: '#8C7761',
  champagne: '#C6A16C',
  dark: '#111614',
  wine: '#111614',
  muted: '#6D695F',
  sand: '#E7DDCF',
  accentDeep: '#82643D',
  surface: '#FBF8F2',
};

export const site = {
  name: 'Isabela Spíndola',
  monogram: 'IS',
  headline: 'A beleza de ser ainda mais você.',
  cro: '',
  bio: 'Harmonização facial com naturalidade e precisão. A Dra. Isabela Spíndola valoriza a beleza natural em uma abordagem Full Face, com atenção à harmonia do rosto e à identidade de cada pessoa.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Full Face'],
  phone: '+55 (38) 99868-1100',
  whatsapp: '5538998681100',
  whatsappUrl: `https://wa.me/5538998681100?text=${encodeURIComponent(whatsappMessage)}`,
  address: '',
  professionalPhilosophy: 'Naturalidade com precisão.',
  instagram: 'https://www.instagram.com/spindolabela/',
  instagramHandle: '@spindolabela',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA BELEZA.'],
  colors: brandColors,
  images: { hero: '/images/isabela-experiencia.webp', essence: '/images/isabela-essencia.webp', about: '/images/isabela-sobre.webp', beauty: '/images/isabela-hero.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.jpg', label: 'Harmonia em cada ângulo', alt: 'Comparação original de antes e depois do rosto masculino em visão de três quartos.', orientation: 'horizontal', beforeShare: 666 / 1284, comparisonRatio: 1284 / 1275 },
    { image: '/images/resultado-02.webp', label: 'A beleza dos seus traços', alt: 'Comparação original de antes e depois do rosto feminino de frente, com marca Isabela Spíndola.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1 },
    { image: '/images/resultado-03.jpg', label: 'Perfil em equilíbrio', alt: 'Comparação original do perfil feminino, apresentada lado a lado na orientação fornecida.', orientation: 'horizontal', beforeShare: 678 / 1284, comparisonRatio: 1284 / 1248 },
    { image: '/images/resultado-04.jpg', label: 'Expressão e identidade', alt: 'Comparação original de antes e depois do rosto feminino de frente, com camisa listrada.', orientation: 'horizontal', beforeShare: 648 / 1283, comparisonRatio: 1283 / 1309 },
    { image: '/images/resultado-05.webp', label: 'Naturalidade nos detalhes', alt: 'Comparação original de antes e depois do rosto feminino em visão frontal, com blusa branca.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1 },
    { image: '/images/resultado-06.jpg', label: 'Delicadeza em cada contorno', alt: 'Comparação original de antes e depois em detalhe dos lábios, sem retoques.', orientation: 'horizontal', beforeShare: 675 / 1282, comparisonRatio: 1282 / 1245 },
  ] as Result[] },
  seo: { title: 'Dra. Isabela Spíndola | Harmonização Facial', description: 'Harmonização facial e Full Face. Naturalidade com precisão para valorizar a sua beleza. Conheça a Dra. Isabela Spíndola e agende sua avaliação.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
