# Javier Moliner — Portfolio Website

Personal portfolio built with **ASP.NET Core Razor Pages**, showcasing my background as a
software engineer transitioning into data analytics. The site presents my experience, education,
projects, and skills through a clean, animated, multilingual interface with light/dark mode
support.

**Live demo:** _add your deployed URL here_

---

## ✨ Features

- **Multi-page Razor Pages site** — Home, Experience, Studies, Projects & Skills, and Contact,
  sharing a common layout and navigation.
- **Dropdown navigation** — each navbar tab expands (on hover on desktop, on tap on mobile) into
  direct links to that page's sections, with smooth-scroll to the target anchor.
- **Light / dark theme toggle** — instant switching via a `data-theme` attribute on `<html>`,
  persisted in `localStorage` so the preference survives page navigation and reloads.
- **Client-side internationalization (i18n)** — full site translation into **Spanish, English,
  and Korean** without page reloads. Every translatable string is tagged with `data-i18n`
  attributes and resolved from a JS dictionary (`wwwroot/js/i18n.js`), with the selected language
  persisted in `localStorage`.
- **Scroll-reveal animations** — sections and cards fade/slide into view on scroll, respecting
  `prefers-reduced-motion` for accessibility.
- **Projects & Skills page** — real projects (data/AI automation pipeline, internal .NET tooling,
  SQL Server integration systems) presented as cards with tech-stack tags, followed by languages
  and soft skills.
- **Contact form that opens Gmail compose** — pre-fills a Gmail web compose window with the
  visitor's message so all they have to do is hit send, instead of relying on the OS's default
  mail client.
- **Consistent avatar/logo image system** — reusable CSS classes handle circular photos, circular
  logos, and square logos differently depending on each image's natural shape, so nothing gets
  awkwardly cropped.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | ASP.NET Core (Razor Pages), .NET 8, C# |
| Frontend | Bootstrap 5, Bootstrap Icons, Devicon |
| Styling | Custom CSS with CSS variables (design tokens for color, spacing, radius, shadow) |
| Interactivity | Vanilla JavaScript (theme toggle, i18n engine, scroll reveal, nav dropdowns) |
| Validation | jQuery Validation / jQuery Validation Unobtrusive |

No external UI, animation, or i18n libraries are used — all interactive behavior is hand-rolled
vanilla JS/CSS to keep the project dependency-free and easy to maintain.

## 📂 Project Structure

```
myWebPage/
├── Pages/
│   ├── Index.cshtml            # Home — Who am I? / Where did I study? / About me
│   ├── Experience.cshtml       # Work experience timeline
│   ├── Studies.cshtml          # Education + certifications
│   ├── ProjectsSkills.cshtml   # Projects, languages, and soft skills
│   ├── Contact.cshtml          # Contact form (opens Gmail compose)
│   └── Shared/
│       ├── _Layout.cshtml      # Navbar, theme toggle, language switcher, footer include
│       └── _Footer.cshtml
├── wwwroot/
│   ├── css/site.css            # Design system (variables, components, themes, animations)
│   ├── js/
│   │   ├── site.js             # Theme toggle, navbar scroll behavior, nav dropdowns, reveal
│   │   └── i18n.js             # Translation dictionary (ES/EN/KO) + language switching logic
│   └── img/                    # Project, company, and university logos/photos
└── Program.cs                  # App startup and middleware pipeline
```

## 🚀 Getting Started

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download)

### Run locally
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd myWebPage/myWebPage
dotnet restore
dotnet run
```
The site will be available at the URL shown in the console (typically
`https://localhost:xxxx`).

### Build
```bash
dotnet build
```

## 🌐 Internationalization

Text content is marked with `data-i18n="key"` attributes in the `.cshtml` files. Translations
live in `wwwroot/js/i18n.js` as a flat dictionary keyed by language (`es`, `en`, `ko`). On language
change, every tagged element on the current page is updated in place — no reload, no server
round-trip. Proper nouns (company names, universities, technologies, certifications) and dates are
intentionally left untranslated.

## 🎨 Design System

All colors, spacing, border radii, and shadows are defined as CSS custom properties in
`site.css`, scoped per theme via `[data-theme="dark"]`. This keeps light/dark mode consistent
across every component (cards, buttons, navbar, forms) without duplicating styles.

## 📄 License

This is a personal portfolio project. Feel free to explore the code for inspiration, but please
don't reuse the personal content (bio, experience, images) as your own.

## 📬 Contact

Reach out via the [contact page](#) or directly at **jamolnav@gmail.com**.
