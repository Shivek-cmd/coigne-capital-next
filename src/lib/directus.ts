import { createDirectus, rest, readItems, readSingleton, createItem } from "@directus/sdk";

export interface DirectusService {
  id: string;
  slug: string;
  icon: string;
  title: string;
  short_description: string;
  full_description: string;
  hero_image: string;
  benefits: string[];
  approach: { title: string; description: string }[];
  related_services: string[];
  sort?: number;
  technology_partner?: {
    name: string;
    description: string;
    link: string;
  };
}

export interface DirectusTeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string;
  regions: string;
  image: string;
  sort: number;
}

export interface DirectusBlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date_published: string;
  read_time: number;
  category: string;
  image: string;
  featured: boolean;
}

export interface DirectusCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  region: string;
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  key_services: string[];
}

export interface DirectusSiteSettings {
  logo_url: string;
  email: string;
  phone: string;
  hero_background_image: string;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
}

export interface DirectusFormSubmission {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  regions?: string[];
  preferred_contact?: string;
  service_interest?: string;
}

interface DirectusSchema {
  services: DirectusService[];
  team_members: DirectusTeamMember[];
  blog_articles: DirectusBlogArticle[];
  case_studies: DirectusCaseStudy[];
  site_settings: DirectusSiteSettings;
  form_submissions: DirectusFormSubmission[];
}

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || "";

function getDirectusClient() {
  if (!DIRECTUS_URL) return null;
  return createDirectus<DirectusSchema>(DIRECTUS_URL).with(rest());
}

const client = getDirectusClient();

export function getDirectusImageUrl(imageId: string): string {
  if (!imageId) return "";
  if (imageId.startsWith("http")) return imageId;
  if (!DIRECTUS_URL) return "";
  return `${DIRECTUS_URL}/assets/${imageId}`;
}

export async function getServices(): Promise<DirectusService[]> {
  if (!client) return [];
  try {
    return await client.request(readItems("services", { sort: ["sort"] }));
  } catch {
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<DirectusService | null> {
  if (!client) return null;
  try {
    const items = await client.request(
      readItems("services", { filter: { slug: { _eq: slug } }, limit: 1 })
    );
    return items[0] || null;
  } catch {
    return null;
  }
}

export async function getTeamMembers(): Promise<DirectusTeamMember[]> {
  if (!client) return [];
  try {
    return await client.request(readItems("team_members", { sort: ["sort"] }));
  } catch {
    return [];
  }
}

export async function getBlogArticles(): Promise<DirectusBlogArticle[]> {
  if (!client) return [];
  try {
    return await client.request(
      readItems("blog_articles", { sort: ["-date_published"] })
    );
  } catch {
    return [];
  }
}

export async function getBlogArticleBySlug(slug: string): Promise<DirectusBlogArticle | null> {
  if (!client) return null;
  try {
    const items = await client.request(
      readItems("blog_articles", { filter: { slug: { _eq: slug } }, limit: 1 })
    );
    return items[0] || null;
  } catch {
    return null;
  }
}

export async function getCaseStudies(): Promise<DirectusCaseStudy[]> {
  if (!client) return [];
  try {
    return await client.request(readItems("case_studies"));
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<DirectusCaseStudy | null> {
  if (!client) return null;
  try {
    const items = await client.request(
      readItems("case_studies", { filter: { slug: { _eq: slug } }, limit: 1 })
    );
    return items[0] || null;
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<DirectusSiteSettings | null> {
  if (!client) return null;
  try {
    return await client.request(readSingleton("site_settings"));
  } catch {
    return null;
  }
}

export async function submitForm(data: DirectusFormSubmission): Promise<boolean> {
  if (!client) return false;
  try {
    await client.request(createItem("form_submissions", data));
    return true;
  } catch {
    return false;
  }
}
