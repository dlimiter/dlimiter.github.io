# CLAUDE.md - Project Context

## Project Overview
This is Dave Lim's personal website, currently built with Jekyll and deployed on GitHub Pages.

**Site URL**: dlimiter.net
**Owner**: Dave Lim (he/him)
**Current Role**: Director of Design at Culture Amp
**Location**: Melbourne, Australia

## Current State

### Technology Stack
- **Framework**: Jekyll 3.10.0 (GitHub Pages compatible)
- **Deployment**: GitHub Pages
- **Styling**: Modern SCSS with CSS custom properties
- **Domain**: dlimiter.net (via CNAME)
- **Font**: Inter (Google Fonts)
- **Plugins**: jekyll-feed, jekyll-seo-tag

### Site Structure
```
/
├── _config.yml          # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── Rakefile             # Build and development tasks
├── CNAME                # Custom domain configuration (dlimiter.net)
├── index.html           # Single-page site (all content)
├── _layouts/
│   └── default.html     # Minimal layout (no navigation)
├── _sass/
│   ├── _variables.scss  # CSS custom properties & variables
│   ├── _reset.scss      # Modern CSS reset
│   ├── _base.scss       # Base typography & elements
│   └── _layout.scss     # Layout components
└── assets/
    ├── css/
    │   └── style.scss   # Main stylesheet (imports all partials)
    └── images/
        └── super_dave.jpg  # Profile image
```

### Current Content
- **Single page**: All content on index.html
  - Logo mark (DL in circle)
  - About section with bio
  - Work history (2005-2024)
  - Contact links (LinkedIn, Email)
  - Profile image (super_dave.jpg)

## Redesign Project (SIMPLIFIED)

### Goal
Created a single-page placeholder site from scratch to display professional information while preparing for future portfolio expansion.

### Status
**✅ SIMPLIFIED** - Single-page site with black background design (2025-12-03)

### What Was Done

1. **Fresh Start**
   - Created backup branch (`backup-old-site`) of old site
   - Removed all old files, layouts, and dependencies
   - Built minimal site structure from scratch

2. **Simplified Configuration**
   - Minimal `_config.yml` with GitHub Pages settings
   - New `Gemfile` with `github-pages` gem
   - Preserved custom domain configuration (CNAME)
   - SEO tags for better search visibility

### Design Implementation
- **Single-page layout**: All content on one page (index.html)
- **Typography**:
  - Inter Semibold for section headings (10% letter spacing, uppercase)
  - Inconsolata Light for body text
- **Color scheme**: Black background (#000000) with white text
- **Layout**: Three-column responsive grid (stacks to single column on mobile)
- **Logo**: DL mark in circle (SVG)
- **Sections**: About, Work history, Contact
- **Image**: Profile photo (super_dave.jpg)

### Removed
- Recipe collection and all recipe-specific code
- About page (content moved to single page)
- Projects system (deferred for future)
- Navigation header/footer
- Multiple layouts
- Custom font files
- Old SCSS architecture
- Legacy Jekyll patterns

## Notes
- Owner has background as software engineer turned design leader
- Focus on cross-functional collaboration and systems thinking
- Multidisciplinary approach combining design and technical fluency
- **Content uses Australian English spelling** (e.g., "specialising" not "specializing")

## Development Commands

### Using Rake (Recommended)

```bash
# Quick commands
rake                    # Start server (default task)
rake serve              # Start server on port 4000
rake watch              # Start with live reload
rake serve_port PORT=4001  # Start on custom port
rake build              # Build the site
rake clean              # Clean build directory
rake update             # Update dependencies

# Utility commands
rake site:check         # Check site health
rake site:stats         # Show site statistics
rake -T                 # List all available tasks
```

### Direct Jekyll Commands

```bash
# Install dependencies
bundle install

# Build the site
bundle exec jekyll build

# Serve locally
bundle exec jekyll serve

# Serve on custom port
bundle exec jekyll serve --port 4001

# Serve with live reload
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000` (or custom port)

## Deployment

The site automatically deploys to GitHub Pages when pushed to the `master` branch. The custom domain `dlimiter.net` is configured via the CNAME file.

## Current Status (2025-12-03)

The site is a simplified single-page design serving as a professional placeholder.

**Active files:**
- `index.html` - Single-page site with all content inline
- `_layouts/default.html` - Minimal layout (fonts, SEO, no navigation)
- Profile image: `assets/images/super_dave.jpg`

**Content sections:**
1. **Logo**: DL mark in circle (SVG)
2. **DLIMITER (About)**: Name, pronouns, location, 15+ years experience
3. **WORK**: Career history from 2005-2024
4. **CONTACT**: LinkedIn and Email links

**Design details:**
- Black background (#000000) with white text
- Inter Semibold for section titles (0.875rem, 10% letter spacing, uppercase)
- Inconsolata Light for body text (1rem, 1.6 line-height)
- Three-column responsive grid (max-width 1400px)
- Mobile: stacks to single column, all left-aligned
- Desktop: first column left-aligned, others right-aligned

**What's not here (deferred for future):**
- About page (separate page)
- Projects system
- Portfolio
- Case studies
- Blog/writing section
- Navigation

## Future Additions

When ready to expand beyond the placeholder:
- Restore About page with extended biography
- Add Projects system for vibe-coded experiments
- Portfolio section for major design work
- Case studies for significant projects
- Possibly add blog/writing section

## Last Updated
2025-12-03 - Updated documentation to reflect simplified single-page structure
