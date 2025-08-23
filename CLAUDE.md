# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Local Development:**
```bash
jekyll serve --livereload
jekyll serve --host 0.0.0.0 --port 4000  # To access from other devices
```

**Build Site:**
```bash
jekyll build
```

## Architecture Overview

This is a Jekyll-based academic portfolio website for a security researcher. The site structure follows Jekyll conventions:

**Key Architecture Components:**

1. **Data-Driven Content**: Core content (publications, education, experiences) is stored in YAML files in `_data/`:
   - `_data/publications.yml` - Research papers with links to PDFs, slides, code
   - `_data/education.yml` - Academic background
   - `_data/experiences.yml` - Professional experience
   - `_data/awards.yml` - Academic awards and recognition

2. **Section-Based Layout**: The main page uses modular sections in `_includes/sections/`:
   - `about.html` - Personal introduction
   - `publications.html` - Research publications list
   - `education.html` - Academic background
   - `experiences.html` - Professional experience

3. **Static Assets Organization**:
   - Research papers stored in `papers/` directory
   - BibTeX files in `bibtex/` directory  
   - Presentation slides in `slides/` directory
   - Custom SCSS components in `_sass/components/`

4. **Jekyll Configuration**: Site configured in `_config.yml` with:
   - Personal information (name, email, GitHub)
   - Site metadata (URL, timezone)
   - Kramdown markdown processing
   - SASS compilation settings

**Content Management Patterns:**
- Publications are added by editing `_data/publications.yml` with corresponding PDF files
- BibTeX files are generated as HTML pages using `_layouts/bibtex.html` 
- The site automatically generates navigation and links based on YAML data
- All academic content links (papers, slides, code) are managed through data files

**Important File Relationships:**
- `_data/publications.yml` → `_includes/sections/publications.html` → PDF files in `papers/`
- YAML data drives the entire content structure, making updates straightforward
- The layout uses Liquid templating to iterate through data collections