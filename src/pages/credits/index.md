---
title: Credits
date: git Last Modified
layout: markdown
readTime: false
---

Giving credit where credit is due, this page is based off of the [Credits](https://raw.githubusercontent.com/LeaVerou/lea.verou.me/refs/heads/main/credits/index.md) page from [Lea Verou](https://lea.verou.me/).

---

This site was built using [Eleventy](https://www.11ty.dev/), hosted on [GitHub Pages](https://pages.github.com/), with previews deployed with [Netlify](https://www.netlify.com/). Certificate courtesy of GitHub Pages and [Let's Encrypt](https://letsencrypt.org/).

## Libraries

- [Eleventy](https://www.11ty.dev/)
- [Shoelace](https://shoelace.style/)
- [Bootstrap](https://getbootstrap.com/)

## Fonts

```css
  :root {
    --sl-font-sans: "Oswald", sans-serif;
    --sl-font-mono: "Fira Mono", monospace;
    --sl-font-serif: "Lato", sans-serif;
    --bs-font-sans-serif: "Lato", serif;
  }
```

- [Oswald](https://fonts.google.com/specimen/Oswald)
  - Headers, specified through general `<H>` tags and CSS classes
- [Lato](https://fonts.google.com/specimen/Lato)
  - Paragraphs, specified through general `<p>` tags and CSS classes
- [Fira Mono](https://fonts.google.com/specimen/Fira+Mono)
  - Code blocks, specified through general `<code>` tags and CSS classes

## Icons

A custom icon component ([icon-component.js](https://github.com/AdamJ/adamjolicoeur.com/blob/main/src/js/icon-component.js)) is used to render icons as web components with [Font Awesome](https://fontawesome.com/) as the preferred icon library.

```
  <fa-icon type="brands" name="github" size="md"></fa-icon>
```

## Plugins

- [eleventy-plugin-inclusive-language](https://github.com/11ty/eleventy-plugin-inclusive-language) to check for inclusive language
- [eleventy-plugin-rss](https://github.com/11ty/eleventy-plugin-rss) to automatically generate an RSS feed
- [eleventy-plugin-syntaxhighlight](https://github.com/11ty/eleventy-plugin-syntaxhighlight) to highlight code blocks (seen on this page)
- [eleventy-plugin-toc](https://github.com/11ty/eleventy-plugin-toc) to automatically generate a linked table of contents. I use an `if content | toc` to show this only if the page has linkable headings.
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) adds IDs to markdown headings in order to create anchor links. Used in combination with the table of contents plugin.
- [markdown-it-eleventy-img](https://github.com/11ty/eleventy-img) used for image processing of vector and raster images.
- [markdown-it-highlightjs](https://github.com/11ty/eleventy-plugin-syntaxhighlight) - highlights code blocks at build time utilizing [PrismJS](https://prismjs.com/) syntax highlighting.
- [eleventy-plugin-emoji-readtime](https://github.com/11tyrocks/eleventy-plugin-emoji-readtime) calculates the reading time of blog posts (i.e. any page using the `blog` layout) based on the number of words. A tag with the time to read is added to the top of a page where the FrontMatter has `readtime: true`.

## Tools

- [VS Code](https://code.visualstudio.com/)
  - default editor, though I've been using [Cursor](https://www.cursor.com/) more lately.
- [Figma](https://www.figma.com/)
  - design tool for creating the overall design, color palette, and a11y checking.
- [GitHub](https://github.com/)
  - for hosting code and site deployment.
- [Netlify](https://www.netlify.com/)
  - testing any site changes via pull requests before merging to main.
