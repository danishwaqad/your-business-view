export const site = {
  name: 'Your Business View',
  tagline: 'Digital Marketing',
  phoneDisplay: '0314-3087744',
  phoneHref: 'tel:+923143087744',
  whatsapp: 'https://wa.me/923143087744',
  address: 'Citi Housing Multan Phase-1, Bosan Road',
  instagram: 'https://www.instagram.com/yourbusinessview01?igsh=d250eXYwbG1yM3U3',
  facebook: 'https://www.facebook.com/share/1BKi4FM2hA/',
  tiktok: 'https://www.tiktok.com/@yourbusinessview001?_r=1&_t=ZS-99oIehEF6rV',
  instagramHandle: '@Yourbusinessview01',
  tiktokHandle: '@yourbusinessview001',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/packages', label: 'Packages' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    slug: 'video-editing',
    title: 'Video Editing',
    summary: 'Product video reels that stop the scroll and sell the story.',
    image: '/images/service-video.jpg',
  },
  {
    slug: 'product-photography',
    title: 'Product Photography',
    summary: 'Clean studio photoshoots that make every product look premium.',
    image: '/images/service-photography.jpg',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    summary: 'Full-funnel content and campaigns that grow your brand online.',
    image: '/images/service-ads.jpg',
  },
  {
    slug: 'logo-design',
    title: 'Logo Design',
    summary: 'Memorable marks and identity systems built around your brand.',
    image: '/images/service-design.jpg',
  },
  {
    slug: 'poster-design',
    title: 'Poster Design',
    summary: 'Scroll-stopping posters for products, offers, and campaigns.',
    image: '/images/service-posters.jpg',
  },
  {
    slug: 'facebook-ads',
    title: 'Facebook Ads Services',
    summary: 'Paid ads that put the right offer in front of the right people.',
    image: '/images/service-ads.jpg',
  },
]

export const packages = [
  {
    name: 'Basic Package',
    price: '20,000 RS',
    featured: false,
    items: [
      '4 Product Photoshoot',
      '8 Poster Design',
      '4 Product Video Reels',
      'Logo Design',
      'Branding',
    ],
  },
  {
    name: 'Premium Package',
    price: '30,000 RS',
    featured: true,
    items: [
      '6 Product Photoshoot',
      '15 Poster Design',
      '6 Product Video Reels',
      'Logo Design',
      'Branding',
    ],
  },
]

export const priceList = [
  { name: 'Product Photoshoot', price: '2,000 RS' },
  { name: 'Product Videoreel', price: '4,000 RS' },
  { name: 'Logo Design', price: '3,000 RS' },
  { name: 'Branding', price: '5,000 RS' },
  { name: 'Monthly Package', price: '20,000 RS' },
]

export const portfolio = [
  {
    title: 'Premium Package Poster',
    category: 'Poster Design',
    image: '/images/premium-package.png',
  },
  {
    title: 'Basic Package Poster',
    category: 'Poster Design',
    image: '/images/basic-package.png',
  },
  {
    title: 'Price List Layout',
    category: 'Branding',
    image: '/images/price-list.png',
  },
  {
    title: 'Brand Identity Board',
    category: 'Logo & Branding',
    image: '/images/brand-guide.png',
  },
  {
    title: 'Product Photography',
    category: 'Photography',
    image: '/images/service-photography.jpg',
  },
  {
    title: 'Product Video Reels',
    category: 'Video Editing',
    image: '/images/service-video.jpg',
  },
]
