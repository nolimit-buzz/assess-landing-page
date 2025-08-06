const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export interface HomePageData {
  navbar: {
    nav_links: Array<{
      href: string;
      title: string;
    }>;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primary_cta: string;
    secondary_cta: string;
    clients: string[];
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  assessment_suite: {
    title: string;
    subtitle: string;
    assessment_cards: Array<{
      title: string;
      features: string[];
      description: string;
    }>;
  };
  cv_ranking: {
    badge: string;
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    results: Array<{
      tag?: string;
      title?: string;
      name?: string;
      score?: number;
      initials?: string;
      matchLevel?: string;
    }>;
  };
  platform: {
    title: string;
    subtitle: string;
  };
  setup: {
    badge: string;
    title: string;
    subtitle: string;
    process_cards: Array<{
      step: string;
      title: string;
      duration: string;
      features: string[];
      description: string;
    }>;
    summary_cards: Array<{
      title: string;
      subtitle: string;
    }>;
  };
  free_trial: {
    title: string;
    description: string;
    cta: string;
  };
  impact: {
    badge: string;
    title: string;
    subtitle: string;
    impact_cards: Array<{
      stat: string;
      label: string;
      title: string;
      description: string;
    }>;
  };
  faqs: {
    title: string;
    subtitle: string;
    faqs_list: Array<{
      question: string;
      answer: string;
    }>;
  };
  offer: {
    badge: string;
    title: string;
    subtitle: string;
    primary_cta: string;
    secondary_cta: string;
    achievements: Array<{
      value: string;
      benchmark: string;
    }>;
  };
  footer: {
    nav_links: {
      links: {
        Company: Array<{
          link: string;
          title: string;
        }>;
        Product: Array<{
          link: string;
          title: string;
        }>;
        Support: Array<{
          link: string;
          title: string;
        }>;
      };
      description: string;
    };
    logo: {
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  };
}

export async function getHomePageData(): Promise<HomePageData> {
  if (!API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }

  if (!API_TOKEN) {
    throw new Error('NEXT_PUBLIC_API_TOKEN is not defined');
  }

  const response = await fetch(`${API_URL}/api/home-page?populate=navbar&populate=hero&populate=platform&populate=platform.platform_img&populate=setup&populate=free_trial&populate=platform&populate=faqs&populate=offer&populate[0]=footer.logo&populate=assessment_suite&populate=cv_ranking&populate=impact`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch home page data');
  }

  const data = await response.json();
  console.log('data', data.data.footer.nav_links.links.Company);
  return data.data;
}

export interface AboutPageData {
  features: Array<{
    icon: string;
    color: string;
    title: string;
    description: string;
  }>;
  navbar: {
    nav_links: Array<{
      href: string;
      title: string;
    }>;
    logo: {
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  };
  hero: {
    title: string;
    subtitle: string;
    hero_cards: Array<{
      icon: string;
      color: string;
      title: string;
      description: string;
    }>;
    title_highlight: string;
    primary_cta: {
      link: string;
      text: string;
    };
    secondary_cta: {
      link: string;
      text: string;
    };
  };
  services: {
    title: string;
    services_list: Array<{
      icon: string;
      link: string;
      color: string;
      title: string;
      description: string;
    }>;
  };
  faqs: {
    title: string;
    subtitle: string;
    faqs_list: Array<{
      question: string;
      answer: string;
    }> | null;
  };
  footer: {
    nav_links: {
      links: {
        Company: Array<{
          link: string;
          title: string;
        }>;
        Product: Array<{
          href: string;
          title: string;
        }>;
        Support: Array<{
          link: string;
          title: string;
        }>;
      };
      description: string;
    };
    logo: {
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  };
}

export async function getAboutPageData(): Promise<AboutPageData> {
  if (!API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }

  if (!API_TOKEN) {
    throw new Error('NEXT_PUBLIC_API_TOKEN is not defined');
  }

  const response = await fetch(`${API_URL}/api/about-page?populate=navbar&populate=navbar.logo&populate=hero&populate=services&populate=faqs&populate=footer&populate=footer.logo`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch about page data');
  }

  const data = await response.json();
  return data.data;
} 