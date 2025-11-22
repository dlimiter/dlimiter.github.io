# Projects Directory

This directory is for standalone HTML projects (full vibe-coded projects).

## Structure

- `_projects/` - Markdown-based projects managed by Jekyll collections
- `projects/` - Standalone HTML/JS/CSS projects (this directory)

## Usage

### For Markdown projects (in `_projects/`)

Create a new `.md` file in `_projects/` with frontmatter:

```yaml
---
title: My Project
description: A brief description
date: 2025-01-15
tags: [tag1, tag2]
published: true  # Set to false to keep unlisted
---

Your markdown content here...
```

### For standalone projects (in `projects/`)

Create a subdirectory with your project files:

```
projects/
  my-cool-app/
    index.html
    script.js
    style.css
```

Access at: `/projects/my-cool-app/`

These won't appear in the projects list automatically. You can:
- Link to them manually from a markdown project
- Add them to the projects page manually
- Keep them completely unlisted

## Tips

- Use `published: true` for projects you want listed on /projects/
- Use `published: false` for unlisted projects (accessible via direct URL)
- Standalone HTML projects are great for interactive demos or small apps
- Markdown projects are great for documentation and write-ups
