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
  { to: '/reviews', label: 'Reviews' },
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
  // {
  //   slug: 'digital-marketing',
  //   title: 'Digital Marketing Services',
  //   summary: 'Full-funnel content and campaigns that grow your brand online.',
  //   image: '/images/service-ads.jpg',
  // },
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

const gallery = (cover: string, extras: string[]) => [cover, ...extras]

const brandingShots = ['/images/brand-guide.png', '/images/service-design.jpg', '/images/service-posters.jpg', '/images/service-ads.jpg']
const photoShots = ['/images/service-photography.jpg', '/images/folder-perfume.jpg', '/images/folder-cream.jpg', '/images/folder-jewelry.jpg']
const videoShots = ['/images/service-video.jpg', '/images/service-photography.jpg', '/images/folder-perfume.jpg', '/images/service-ads.jpg']

const productFolders = [
  { slug: 'perfume', title: 'Perfume', cover: '/images/folder-perfume.jpg' },
  { slug: 'cream', title: 'Cream', cover: '/images/folder-cream.jpg' },
  { slug: 'skincare', title: 'Skincare', cover: '/images/folder-cream.jpg' },
  { slug: 'jewelry', title: 'Jewelry', cover: '/images/folder-jewelry.jpg' },
  { slug: 'cosmetics', title: 'Cosmetics', cover: '/images/service-photography.jpg' },
]

const logoImages = [
  '/images/dummy-logo-1.png',
  '/images/dummy-logo-2.png',
  '/images/dummy-logo-3.png',
  '/images/dummy-logo-4.png',
  '/images/dummy-logo-perfume.png',
  '/images/dummy-logo-cream.png',
  '/images/dummy-logo-jewelry.png',
  '/images/dummy-logo-skincare.png',
  '/images/dummy-logo-cosmetics.png',
  '/images/dummy-logos-grid.png',
]

export const portfolioCategories = [
  {
    slug: 'branding',
    title: 'Logo & Branding',
    cover: '/images/dummy-logos-grid.png',
    folders: [
      {
        slug: 'logos',
        title: 'Logos',
        cover: '/images/dummy-logos-grid.png',
        images: logoImages,
      },
      ...productFolders.map((folder) => ({
        ...folder,
        images: gallery(folder.cover, brandingShots),
      })),
    ],
  },
  {
    slug: 'photography',
    title: 'Product Photography',
    cover: '/images/service-photography.jpg',
    folders: productFolders.map((folder) => ({
      ...folder,
      images: gallery(folder.cover, photoShots),
    })),
  },
  {
    slug: 'video',
    title: 'Product Video Reels',
    cover: '/images/service-video.jpg',
    folders: productFolders.map((folder) => ({
      ...folder,
      images: gallery(folder.cover, videoShots),
    })),
  },
]

export function getPortfolioCategory(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug)
}

export function getPortfolioFolder(categorySlug: string, folderSlug: string) {
  const category = getPortfolioCategory(categorySlug)
  const folder = category?.folders.find((item) => item.slug === folderSlug)
  return category && folder ? { category, folder } : undefined
}

export const reviewImages = [
  '/images/reviews/review-01.jpg',
  '/images/reviews/review-02.jpg',
  '/images/reviews/review-03.jpg',
  '/images/reviews/review-04.jpg',
  '/images/reviews/review-05.jpg',
  '/images/reviews/review-06.jpg',
  '/images/reviews/review-07.jpg',
  '/images/reviews/review-08.jpg',
  '/images/reviews/review-09.jpg',
  '/images/reviews/review-10.jpg',
  '/images/reviews/review-11.jpg',
  '/images/reviews/review-12.jpg',
]
