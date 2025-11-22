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
├── CNAME                # Custom domain configuration
├── index.html           # Homepage
├── about.html           # About page
├── projects.html        # Projects index page
├── _layouts/
│   ├── default.html     # Base layout with header/footer
│   ├── page.html        # Page layout for content pages
│   └── project.html     # Project layout for project posts
├── _includes/
│   ├── header.html      # Site header with navigation
│   └── footer.html      # Site footer
├── _projects/           # Markdown-based projects (Jekyll collection)
│   ├── example-published.md    # Example published project
│   └── example-unlisted.md     # Example unlisted project
├── projects/            # Standalone HTML projects
│   ├── demo-app/        # Example standalone HTML app
│   └── README.md        # Projects documentation
├── _sass/
│   ├── _variables.scss  # CSS custom properties & variables
│   ├── _reset.scss      # Modern CSS reset
│   ├── _base.scss       # Base typography & elements
│   └── _layout.scss     # Layout components
└── assets/
    └── css/
        └── style.scss   # Main stylesheet (imports all partials)
```

### Current Content
- **Homepage**: Clean hero introduction with role at Culture Amp
- **About page**: Comprehensive professional information including:
  - Work history (2005-present) with detailed role descriptions
  - Education background (RMIT, University of Adelaide)
  - Professional timeline with grid layout
- **Projects page**: Listing of published vibe-coded projects and experiments
  - Supports both markdown-based projects and standalone HTML apps
  - Published/unlisted functionality for selective visibility

## Redesign Project (COMPLETED)

### Goal
Redesigned the entire website from scratch to provide professional information and prepare for a future portfolio section.

### Status
**✅ COMPLETED** - Fresh Jekyll site built from scratch (2025-11-20)

### What Was Done

1. **Created backup branch** - `backup-old-site` preserves the original site
2. **Fresh Jekyll installation** - Removed all old files and started clean
3. **Modern technology stack**:
   - Latest GitHub Pages compatible Jekyll
   - Modern CSS architecture using CSS custom properties
   - Modular SCSS structure
   - SEO plugin integration
4. **New site structure**:
   - `index.html` - Clean, modern homepage
   - `about.html` - Professional biography with complete work history
   - Modern layouts in `_layouts/`
   - Reusable components in `_includes/`
   - Organized SCSS in `_sass/`
5. **GitHub Pages configuration**:
   - Custom domain preserved (dlimiter.net via CNAME)
   - Proper Gemfile for GitHub Pages compatibility
   - SEO tags for better search visibility

### New Site Structure
- **Homepage**: Clean hero section with introduction and current role at Culture Amp
- **About**: Comprehensive professional biography with:
  - Work history (2005-present)
  - Education background
  - Professional timeline layout
- **Projects**: Flexible system for vibe-coded projects:
  - Markdown projects in `_projects/` collection
  - Standalone HTML projects in `projects/` directory
  - Published/unlisted visibility control
  - Custom project layout with metadata support

### Design System
- **Typography**: Inter font family from Google Fonts
- **Color palette**: Neutral gray scale with semantic color variables
- **Spacing**: Consistent spacing scale using CSS custom properties
- **Layout**: Responsive container with max-width constraints
- **Mobile-first**: Fully responsive design
- **Accessibility**: Semantic HTML and proper contrast ratios

### Removed
- Recipe collection and all recipe-specific code
- Custom font files (372KB)
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

The site automatically deploys to GitHub Pages when pushed to the `master` branch. No additional deployment steps required.

## Projects System

The site includes a flexible projects system for hosting vibe-coded experiments and tools.

### Two Project Types

**1. Markdown Projects** (`_projects/` directory)
- Managed by Jekyll collections
- Great for documentation, write-ups, case studies
- Supports frontmatter metadata (title, description, date, tags)
- Published/unlisted control via `published: true/false`

**2. Standalone HTML Projects** (`projects/` directory)
- Full HTML/CSS/JS applications
- Perfect for interactive demos and small apps
- Not automatically listed (can be linked manually)

### Adding Projects

**Markdown project:**
```yaml
# Create _projects/my-project.md
---
title: My Project
description: A brief description
date: 2025-01-15
tags: [experiment, demo]
published: true  # false for unlisted
---

Project content in markdown...
```

**Standalone HTML project:**
```
# Create projects/my-app/index.html
projects/
  my-app/
    index.html
    script.js
    style.css
```

### URLs
- Markdown projects: `/projects/project-name/`
- Standalone projects: `/projects/directory-name/`
- Projects index: `/projects/`

## Future Additions

- Portfolio section to showcase major design work
- Case studies for significant projects
- Possibly add a blog/writing section

## Last Updated
2025-11-20 - Complete redesign with projects system
