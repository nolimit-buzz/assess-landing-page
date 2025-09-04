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
    ndpc_certification?: {
      text: string;
      logo?: {
        formats?: {
          thumbnail?: { url: string };
        };
        url?: string;
        name?: string | null;
      };
    } | null;
    clients: Array<{
      formats?: {
        thumbnail?: {
          url: string;
        };
      };
      url?: string;
      name?: string;
    }>;
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

export interface ContactDetailItem {
  icon: 'Phone' | 'Mail' | 'MapPin' | 'Clock' | string;
  color: 'green' | 'navy' | string;
  title: string;
  main_info: string;
  action_type: 'tel' | 'mailto' | 'map' | null;
  description: string | null;
  action_value: string | null;
}

export interface ContactPageData {
  navbar: HomePageData['navbar'];
  footer: HomePageData['footer'];
  contact_details: ContactDetailItem[];
}

export interface PrivacyPolicyData {
  content: string;
  navbar: HomePageData['navbar'];
  footer: HomePageData['footer'];
}

export interface TermsOfServiceData {
  content: string;
  navbar: HomePageData['navbar'];
  footer: HomePageData['footer'];
}

export async function getHomePageData(): Promise<HomePageData> {
  if (!API_URL) {
    // Allow fetching from absolute URL when env is not configured
  }

  if (!API_TOKEN) {
    // Token may not be required for public content
  }
  const response = await fetch(`https://diligent-light-6531c314f6.strapiapp.com/api/home-page?populate=navbar&populate=hero&populate=hero.ndpc_certification.logo&populate=hero.clients&populate=platform&populate=platform.platform_img&populate=setup&populate=free_trial&populate=platform&populate=faqs&populate=offer&populate[0]=footer.logo&populate=assessment_suite&populate=cv_ranking&populate=impact`, {
    headers: {
      ...(API_TOKEN ? { 'Authorization': `Bearer ${API_TOKEN}` } : {}),
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch home page data');
  }

  const data = await response.json();
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

export async function getContactPageData(): Promise<ContactPageData> {
  if (!API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }

  if (!API_TOKEN) {
    throw new Error('NEXT_PUBLIC_API_TOKEN is not defined');
  }

  const response = await fetch(
    `${API_URL}/api/contact-page?populate=navbar&populate[0]=footer.logo`,
    {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch contact page data');
  }

  const data = await response.json();
  return data.data;
}

export async function getPrivacyPolicyData(): Promise<PrivacyPolicyData> {
  const response = await fetch(`https://diligent-light-6531c314f6.strapiapp.com/api/privacy-policy?populate=navbar&populate=footer.logo`, {
    headers: {
      ...(API_TOKEN ? { 'Authorization': `Bearer ${API_TOKEN}` } : {}),
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch privacy policy');
  }

  const data = await response.json();
  return data.data;
}

export async function getTermsOfServiceData(): Promise<TermsOfServiceData> {
  const response = await fetch(`https://diligent-light-6531c314f6.strapiapp.com/api/terms-of-service?populate=navbar&populate=footer.logo`, {
    headers: {
      ...(API_TOKEN ? { 'Authorization': `Bearer ${API_TOKEN}` } : {}),
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch terms of service');
  }

  const data = await response.json();
  return data.data;
}