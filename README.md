# Cyndi Blase — Portfolio

Personal portfolio site built with Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. Optimized for static export and Netlify hosting.

## Local setup

**Requirements:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build (outputs static site to /out)
npm run build
```

Preview the static export locally with any static server, for example:

```bash
npx serve out
```

## Netlify deployment

### Option A — Git-connected (recommended)

1. Push this repo to GitHub, GitLab, or Bitbucket.
2. In [Netlify](https://www.netlify.com/), choose **Add new site → Import an existing project**.
3. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. Deploy. Future pushes to your main branch trigger new builds.

### Option B — Drag and drop

1. Run `npm run build` locally.
2. In Netlify, go to **Sites → Add new site → Deploy manually**.
3. Drag the generated `out` folder onto the upload area.

## Where to place resume and images

| Asset | Location |
|-------|----------|
| Resume PDF | `public/resume/Cyndi_Sabido_Resume.pdf` |
| Profile photo | `public/images/profile/profile.jpg` |
| Other images | `public/images/` |

Update the resume path in `src/data/profile.ts` if you rename the file:

```ts
resumePath: "/resume/Cyndi_Sabido_Resume.pdf",
profileImage: "/images/profile/profile.jpg",
```

## Customize content quickly

All site copy lives in typed data files under `src/data/`:

| File | Contents |
|------|----------|
| `profile.ts` | Name, headline, about text, nav links, contact info |
| `experience.ts` | Job history and bullet points |
| `projects.ts` | Selected Work cards and categories |
| `skills.ts` | Skill groups |
| `education.ts` | Degrees, certifications, awards |
| `testimonials.ts` | Reserved for future use (not shown on site) |

After editing data files, save and refresh the dev server—no component changes needed for most updates.

### Design tokens

Colors are defined in `src/app/globals.css`:

- Primary: `#0F4C5C`
- Secondary: `#3BAFB2`
- Accent: `#F46A6A`
- Background: `#F9FAFB`
- Text: `#1F2937`

Dark mode uses the `next-themes` class strategy (toggle in the header).

## Project structure

```
src/
├── app/              # Next.js App Router pages and global styles
├── components/
│   ├── layout/       # Header, Footer, ThemeProvider
│   ├── sections/     # Hero, About, Experience, etc.
│   └── ui/           # Shared UI primitives
├── data/             # Typed content (edit these first)
└── lib/              # Utilities
public/
├── resume/           # PDF resume
└── images/           # Optional photos and screenshots
```

## Stack

- Next.js 15 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (subtle section animations)
- Lucide React icons
- next-themes (dark mode)
