const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Chris D',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Developer',
    bio: 'lifelong learner',
    email: '',
    linkedin: '',
    github: '1NF053C',
    instagram: '',
  },
  projects: [
    {
      name: `tbd`,
      href: 'https://github.com/1NF053C'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'My Blog',
    description: 'Welcome to my blog',
    theme: 'dark'
  },

  // CONFIG configration (required)
  link: 'blog-sepia-beta.vercel.app',
  since: 2023,
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: '', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: '1NF053C/blog',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
