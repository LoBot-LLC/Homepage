# LoBot Homepage

The official landing website for **LoBot LLC** — an AI-native startup building logistics and business solutions that help organizations of every size make future-ready strategic decisions.

<img width="2048" height="1152" alt="lobotintro" src="https://github.com/user-attachments/assets/562df521-125c-4a42-96c2-513a49e4c1be" />

## 🏢 About LoBot LLC

LoBot LLC is a fast-moving, AI-native company founded in October 2026. Our mission is simple:

- **Empower businesses** of every size with robust logistics and productivity solutions
- **Accelerate innovation** with AI built on open-source foundations
- **Keep open source at our core** — driving transparency, collaboration, and community-driven development
- **Design architectures that scale** from startups to large enterprises

Our flagship product is **LoBot TecnoIndicator** — an open-source web application that delivers real-time, AI-powered 10-year forecasts for global oil, electricity, and water prices with scenario analysis, dynamic factor insights, and actionable recommendations.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** latest LTS (v22+ recommended)
- **Next.js** latest (currently v16.2.6)
- **PostgreSQL** database (local or managed like Neon, Supabase, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/LoBot-LLC/homepage.git
cd homepage

# Install locked dependencies (reproducible builds)
npm ci
```

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | **Yes** | PostgreSQL connection string (e.g., `postgresql://postgres:postgres@localhost:5432/app_db`) |

> **Note**: The database is required at runtime for persisted blog posts and the health endpoint. If unreachable, the blog gracefully falls back to seed posts. During CI/build, a placeholder URL is used because Next.js imports the database module during compilation but does not connect to it (all DB routes are `dynamic = "force-dynamic"`).

### Database Setup

The app uses Drizzle ORM with PostgreSQL. The database schema is managed via Drizzle Kit (`drizzle.config.json`). The blog tables (e.g., `blog_posts`) are created automatically on first use via the idempotent `ensureReady()` logic in `src/lib/blog.ts` — no manual migration step is required for basic local setup.

A local PostgreSQL instance is recommended for development; alternatively, use any managed PostgreSQL provider (Neon, Supabase, AWS RDS, etc.).

### Development

```bash
# Start development server with Turbopack
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Production Build

```bash
# Type-check, lint, and build for production
npm run typecheck
npm run lint
npm run build

# Start production server
npm run start
```

---

## 📡 API Endpoints

All API routes are server-rendered (`force-dynamic`) and require a working `DATABASE_URL` at runtime.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | `GET` | Health check — returns `{ ok: true }` if DB is reachable, `{ ok: false }` with 500 otherwise |
| `/api/blog` | `GET` | List all blog posts (newest first) |
| `/api/blog/[slug]` | `GET` | Get a single blog post by slug |

### Example Response

**GET /api/blog**
```json
{
  "posts": [
    {
      "slug": "introducing-lobot-llc",
      "author": "LoBot LLC",
      "coverEmoji": "🚀",
      "publishedAt": "2026-10-28",
      "translations": {
        "en": { "title": "...", "excerpt": "...", "body": ["..."] },
        "es": { ... },
        "vi": { ... }
      }
    }
  ]
}
```

**GET /api/health**
```json
{ "ok": true }
```

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 4 |
| Database | PostgreSQL + Drizzle ORM 0.45 |
| Runtime | Node.js 22+ |
| Package Manager | npm (with `package-lock.json` for reproducibility) |
| Linting | ESLint 9 + eslint-config-next |
| CI/CD | GitHub Actions (Node.js `latest`) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── health/route.ts       # Health check endpoint
│   │   └── blog/
│   │       ├── route.ts           # List all posts
│   │       └── [slug]/route.ts    # Get single post
│   ├── blog/
│   │   ├── page.tsx               # Blog index page
│   │   └── [slug]/page.tsx        # Blog post page
│   ├── products/                  # Product pages
│   │   ├── page.tsx               # Products overview
│   │   └── tecnoindicator/        # TecnoIndicator product page
│   │       └── page.tsx
│   ├── careers/                   # Careers page
│   │   └── page.tsx
│   ├── about/                     # About page
│   │   └── page.tsx
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   └── not-found.tsx              # 404 page
├── components/
│   ├── pages/                     # Page-level components
│   │   ├── AboutContent.tsx
│   │   ├── BlogContent.tsx
│   │   ├── CareersContent.tsx
│   │   ├── HomeContent.tsx
│   │   └── ProductContent.tsx
│   ├── Navbar.tsx                 # Main navigation
│   ├── Footer.tsx                 # Site footer
│   ├── Providers.tsx              # React context providers (i18n, theme)
│   ├── CopyEmail.tsx              # Email copy component
│   ├── Icons.tsx                  # SVG icons
│   └── ui.tsx                     # Reusable UI components
├── db/
│   ├── index.ts                   # Lazy-initialized Drizzle client (getDb())
│   └── schema.ts                  # Blog posts schema
├── lib/
│   ├── blog.ts                    # Blog data layer (with seed fallback)
│   └── site.ts                    # Site constants (email, GitHub, etc.)
├── i18n/
│   ├── en.ts                      # English translations
│   ├── es.ts                      # Spanish translations
│   └── vi.ts                      # Vietnamese translations
└── middleware.ts                  # i18n request middleware
```

**Public assets:**
```
public/
├── favicon.svg                    # Site favicon
├── robots.txt                     # AI agent & crawler access rules
├── llms.txt                       # Website metadata for AI agents
└── sitemap.xml                    # XML sitemap for search engines
```

---

## 🧪 Quality Checks

```bash
# Run all checks (CI pipeline)
npm run typecheck   # Generates route types + tsc --noEmit
npm run lint        # ESLint
npm run build       # Production build
```

CI runs on every push/PR to `main` with Node.js `latest`, using `npm ci` for reproducible installs.

---

## 🌍 Internationalization

The site supports **3 languages** out of the box:
- **English** (`en`) — default
- **Spanish** (`es`)
- **Vietnamese** (`vi`)

Language is detected from the browser and persisted via a cookie. All UI strings are in `src/i18n/*.ts`.

---

## 🤝 Contributing

We welcome contributions from everyone, including AI-generated and AI-assisted code.

### Our Standards

- Be respectful and inclusive.
- Provide constructive feedback.
- Focus on improving the project.

### Contribution Guidelines

- All contributions are welcome (features, bug fixes, documentation, design improvements, etc.).
- AI-generated / AI-assisted contributions are explicitly allowed, but you must rigorously test the codebase before pushing to the main repository.
- Always run the site in multiple browsers and test responsiveness, chart rendering, data exports, and edge cases (horizon = 1 and horizon = 10).
- Open a Pull Request with a clear description of changes.
- You are required to justify why your UI looks better and more consistent compared to the original one (e.g., better functionality, etc.) if your Pull Requests has a different UI from the original or if you want to remove a feature.
- Ensure that your code has to work via the autotester before submitting a Pull Request.
- Reference any related issues.

Violations of this Code of Conduct may result in temporary or permanent bans from the project.

---

## 📄 License

**BSD 3-Clause License** — see [LICENSE](LICENSE) for details.

```
Copyright (c) 2026, LoBot LLC
```

---

## 🙏 Credits

**Author & Maintainer**  
LoBot LLC — [https://github.com/LoBot-LLC](https://github.com/LoBot-LLC)

**Company Contact**  
📧 lobotllc@atomicmail.io

---

*Built with AI agents and human developers working together, all as a team.*
