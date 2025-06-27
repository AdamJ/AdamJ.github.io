---
title: Credits
date: git Last Modified
layout: markdown
description: "Credits and callouts from building this site"
readTime: false
tocBlock: true
---

Giving credit where credit is due, this page is based off of the [Credits](https://raw.githubusercontent.com/LeaVerou/lea.verou.me/refs/heads/main/credits/index.md) page from [Lea Verou](https://lea.verou.me/).

---

This site was built using [Eleventy](https://www.11ty.dev/), hosted on [Cloudflare Pages](https://cloudflare.com/), with previews deployed with [Cloudflare](https://www.cloudflare.com/). Certificate courtesy of Cloudflare and [Let's Encrypt](https://letsencrypt.org/).

## Libraries

- [Eleventy](https://www.11ty.dev/)
- [BeerCSS](https://www.beercss.com)
- [Shoelace](https://shoelace.style/)

## Fonts

```css
  --font: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", "Noto Sans", Arial, sans-serif;

```

_These are the defaults that come with BeerCSS. They can be changed by following the [documentation](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md#fonts)_

## Icons

As BeerCSS uses Material Symbols, I've swapped out previous custom icons to use the built-in options.

```css
  --font-icon: "Material Symbols Outlined";
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

## Performance Testing

After reading Zach Leatherman's post on [adding lighthouse scores to a site's footer](https://www.zachleat.com/web/lighthouse-in-footer/), I decided to give it a go myself. I followed that up with Zach's other post on [using speedlify to continuously measure performance](https://www.zachleat.com/web/speedlify/). Both are great reads.

Check out the latest speedlify scores: [https://speedlify-aj.netlify.app](https://speedlify-aj.netlify.app)

- [performance-leaderboard](https://github.com/zachleat/performance-leaderboard) is a plugin to run lighthouse "scoring" against a set of urls to gauge who is the fastest.
- [Lighthouse Metrics](https://lighthouse-metrics.com) for gauging how two different versions of my site compare to one another. Helpful after pushing any updates to see what might have changed in "live" version, even after testing locally.
- [Lighthouse Report Diff Tool](https://googlechrome.github.io/lighthouse-ci/viewer/) upload your two reports (one before and one after any changes) to see the differences.

## Tools

- [VS Code](https://code.visualstudio.com/)
  - default editor, though I've been using [Cursor](https://www.cursor.com/) more lately.
- [Figma](https://www.figma.com/)
  - design tool for creating the overall design, color palette, and a11y checking.
- [GitHub](https://github.com/)
  - for hosting code and site deployment.
- [Cloudflare](https://www.cloudflare.com/)
  - testing any site changes via pull requests before merging to main.
