# Coigne Capital - Next.js 15 + Directus CMS

Corporate website for **Coigne Capital** — a cross-border governance, ownership, and capital structure advisory firm. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS 4, with Directus CMS integration for content management.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 4, tw-animate-css |
| UI Components | Radix UI (shadcn/ui pattern), CVA |
| Animations | Framer Motion |
| Icons | Lucide React |
| CMS | Directus (via @directus/sdk) |
| Forms | React Hook Form + Zod validation |
| i18n | i18next (English, French, Spanish) |
| Package Manager | pnpm |

## Design System

- **Primary**: Gold `#C9A962`
- **Secondary**: Silver `#8C8C8C`
- **Background**: Obsidian `#121212`
- **Text**: Off-white `#FAFAF5`
- **Display Font**: Cormorant Garamond
- **Body Font**: Outfit
- **Accent Font**: Space Grotesk

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, nav, footer)
│   ├── page.tsx                # Home page (hero, services, about, CTA, contact)
│   ├── not-found.tsx           # 404 page
│   ├── globals.css             # Global styles + CSS variables
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog article detail
│   ├── case-studies/
│   │   └── page.tsx            # Case studies listing
│   ├── services/
│   │   └── [slug]/page.tsx     # Individual service pages
│   └── team/
│       └── page.tsx            # Team members
├── components/
│   ├── LeadCaptureForm.tsx     # Lead capture form (posts to Directus)
│   ├── layout/
│   │   ├── Navigation.tsx      # Responsive nav with mobile menu
│   │   └── Footer.tsx          # Footer with links
│   └── ui/                     # Reusable UI components (shadcn pattern)
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       └── textarea.tsx
├── data/                       # Static fallback data (used when Directus is not configured)
│   ├── blog.ts
│   ├── caseStudies.ts
│   ├── images.ts
│   ├── services.ts
│   └── team.ts
└── lib/
    ├── directus.ts             # Directus SDK client + data-fetching functions
    └── utils.ts                # Utility functions (cn)
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install & Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## How Directus Integration Works

The site works in two modes:

1. **Without Directus** (default): Pages render using static fallback data from `src/data/`. No configuration needed.
2. **With Directus**: Set the `NEXT_PUBLIC_DIRECTUS_URL` environment variable. Pages will fetch content from Directus API instead.

```bash
# .env.local
NEXT_PUBLIC_DIRECTUS_URL=https://your-directus-instance.com
```

The integration layer (`src/lib/directus.ts`) provides typed functions for each collection:

| Function | Description |
|---|---|
| `getServices()` | Fetch all services |
| `getServiceBySlug(slug)` | Fetch a single service by slug |
| `getTeamMembers()` | Fetch all team members |
| `getBlogArticles()` | Fetch all blog articles (sorted by date) |
| `getBlogArticleBySlug(slug)` | Fetch a single blog article by slug |
| `getCaseStudies()` | Fetch all case studies |
| `getSiteSettings()` | Fetch site-wide settings (singleton) |
| `submitForm(data)` | Submit a lead capture form entry |

---

## Directus CMS Setup Guide

Follow these steps to set up Directus so your client can manage content directly.

### Step 1: Deploy a Directus Instance

Choose one of these options:

| Option | Effort | Cost |
|---|---|---|
| [Directus Cloud](https://directus.cloud) | Easiest (managed) | From $15/mo |
| Self-hosted (Railway, Render, Fly.io) | Medium | ~$5-10/mo |
| Docker on any VPS | Full control | Varies |

**Docker quick start:**

```bash
docker run -d \
  --name directus \
  -p 8055:8055 \
  -e SECRET="your-secret-key" \
  -e ADMIN_EMAIL="admin@example.com" \
  -e ADMIN_PASSWORD="your-password" \
  -e DB_CLIENT="sqlite3" \
  -e DB_FILENAME="/directus/database/database.sqlite" \
  directus/directus:latest
```

### Step 2: Create Collections

Create the following collections in Directus Admin (Settings > Data Model):

#### Collection: `services`

| Field | Type | Interface | Notes |
|---|---|---|---|
| `id` | UUID | Auto-generated | Primary key |
| `sort` | Integer | Sort | For ordering |
| `slug` | String | Slug | Unique, URL-friendly |
| `icon` | String | Input | Lucide icon name (e.g. `Building2`, `Users`, `TrendingUp`, `Shield`, `Layers`, `Globe`, `Cog`) |
| `title` | String | Input | Service title |
| `short_description` | Text | Textarea | Brief description for cards |
| `full_description` | Text | Textarea | Full description for service page |
| `hero_image` | Image | Image | Banner image |
| `benefits` | JSON | Code (JSON) | Array of strings: `["Benefit 1", "Benefit 2"]` |
| `approach` | JSON | Code (JSON) | Array of objects: `[{"title": "Step 1", "description": "..."}]` |
| `related_services` | JSON | Code (JSON) | Array of slugs: `["slug-1", "slug-2"]` |
| `technology_partner` | JSON | Code (JSON) | Optional: `{"name": "...", "description": "...", "link": "..."}` |

#### Collection: `team_members`

| Field | Type | Interface | Notes |
|---|---|---|---|
| `id` | UUID | Auto-generated | Primary key |
| `sort` | Integer | Sort | For ordering |
| `name` | String | Input | Full name |
| `title` | String | Input | Job title |
| `bio` | Text | Textarea | Biography |
| `expertise` | String | Input | Comma-separated skills |
| `regions` | String | Input | Comma-separated regions |
| `image` | Image | Image | Profile photo |

#### Collection: `blog_articles`

| Field | Type | Interface | Notes |
|---|---|---|---|
| `id` | UUID | Auto-generated | Primary key |
| `slug` | String | Slug | Unique, URL-friendly |
| `title` | String | Input | Article title |
| `excerpt` | Text | Textarea | Short summary |
| `content` | Text | WYSIWYG or Markdown | Full article content |
| `author` | String | Input | Author name |
| `date_published` | DateTime | DateTime | Publish date |
| `read_time` | Integer | Input | Estimated read time in minutes |
| `category` | String | Dropdown | e.g. `Governance`, `Strategy`, `Market Entry` |
| `image` | Image | Image | Featured image |
| `featured` | Boolean | Toggle | Mark as featured article |

#### Collection: `case_studies`

| Field | Type | Interface | Notes |
|---|---|---|---|
| `id` | UUID | Auto-generated | Primary key |
| `title` | String | Input | Case study title |
| `subtitle` | String | Input | Subtitle |
| `industry` | String | Input | e.g. `Manufacturing`, `Technology` |
| `region` | String | Input | Geographic region |
| `challenge` | Text | Textarea | The challenge faced |
| `solution` | Text | Textarea | The solution provided |
| `outcome` | Text | Textarea | The outcome achieved |
| `metrics` | JSON | Code (JSON) | Array of objects: `[{"label": "Revenue Growth", "value": "340%"}]` |
| `key_services` | JSON | Code (JSON) | Array of service slugs |

#### Collection: `site_settings` (Singleton)

Mark this collection as a **Singleton** in Directus (Settings > Data Model > site_settings > toggle "Singleton").

| Field | Type | Interface | Notes |
|---|---|---|---|
| `logo_url` | String | Input | Logo image URL |
| `email` | String | Input | Contact email |
| `phone` | String | Input | Contact phone |
| `hero_background_image` | Image | Image | Home page hero background |
| `hero_title` | String | Input | Hero section title |
| `hero_subtitle` | String | Input | Hero section subtitle |
| `hero_description` | Text | Textarea | Hero section description |

#### Collection: `form_submissions`

| Field | Type | Interface | Notes |
|---|---|---|---|
| `id` | UUID | Auto-generated | Primary key |
| `first_name` | String | Input | |
| `last_name` | String | Input | |
| `email` | String | Input | |
| `company` | String | Input | |
| `phone` | String | Input | Optional |
| `message` | Text | Textarea | Optional |
| `regions` | JSON | Code (JSON) | Optional, array of strings |
| `preferred_contact` | String | Dropdown | `email` or `phone` |
| `service_interest` | String | Input | Optional |

### Step 3: Set Up Permissions

1. Go to **Settings > Access Control**
2. Edit the **Public** role
3. Grant **Read** access to: `services`, `team_members`, `blog_articles`, `case_studies`, `site_settings`
4. Grant **Create** access to: `form_submissions` (so the website can submit forms without auth)
5. Keep all other permissions restricted

### Step 4: Migrate Content

Transfer the existing static data into Directus:

1. **Services**: Copy the 7 services from `src/data/services.ts` into the `services` collection
2. **Team Members**: Copy the 4 team members from `src/data/team.ts`
3. **Blog Articles**: Copy from `src/data/blog.ts`
4. **Case Studies**: Copy the 3 case studies from `src/data/caseStudies.ts`
5. **Site Settings**: Set hero content, contact info, etc.
6. **Images**: Upload all images to Directus file storage and update image references

### Step 5: Connect the Website

1. Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_DIRECTUS_URL=https://your-directus-instance.com
```

2. Restart the dev server:

```bash
pnpm dev
```

The website will now fetch content from Directus. When Directus is unreachable, it falls back to static data.

### Step 6: Create a Client Account

1. Go to **Settings > Access Control** in Directus
2. Create a new role (e.g. `Content Editor`) with permissions to:
   - **Read/Update** on `services`, `team_members`, `blog_articles`, `case_studies`, `site_settings`
   - **Read** on `form_submissions` (to view leads)
   - **Read/Upload** on `directus_files` (to manage images)
3. Create a user with this role and share credentials with your client

### Step 7: Set Up Automated Updates (Optional)

**Option A: ISR (Recommended)**

Add `revalidate` to your page components so Next.js periodically re-fetches from Directus:

```tsx
export const revalidate = 60; // Re-fetch every 60 seconds
```

**Option B: On-Demand Revalidation via Webhook**

1. Create a Next.js API route for revalidation:

```tsx
// src/app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidation-secret");
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  revalidatePath("/", "layout");
  return NextResponse.json({ revalidated: true });
}
```

2. In Directus, create a **Flow** (Settings > Flows):
   - Trigger: Item Create/Update on any content collection
   - Action: Webhook POST to `https://your-site.com/api/revalidate`
   - Header: `x-revalidation-secret: your-secret`

This gives your client instant updates: edit in Directus, save, and the website reflects changes within seconds.

## Deployment

### Vercel (Recommended)

1. Push the repo to GitHub
2. Import in [Vercel](https://vercel.com/new)
3. Add environment variable: `NEXT_PUBLIC_DIRECTUS_URL`
4. Deploy

### Other Platforms

Works on any platform that supports Next.js: Netlify, Railway, AWS Amplify, Docker, etc.

## Client Workflow

Once Directus is set up, your client's workflow is:

1. Log in to the Directus admin panel (e.g. `cms.yourdomain.com`)
2. Navigate to the collection they want to edit (Services, Team, Blog, etc.)
3. Edit content, upload images, hit **Save**
4. The website updates automatically (via ISR or webhook revalidation)

No developer involvement needed for content changes.
