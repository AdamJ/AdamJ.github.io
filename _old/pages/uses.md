---
layout: "page"
title: "Uses"
date: git Last Modified
abbreviation: "uses"
description: "What I use as a designer."
headerButton: false
eleventyNavigation:
  key: Uses
  order: 10
---

<style>
  content {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    a {
      color: var(--sl-color-primary-900) !important;
    }
  }
  h2 {
    position: relative;
    background: linear-gradient(90deg, var(--sl-color-primary-900) 0%, var(--sl-color-primary-600) 100%);
    color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media (prefer-color-scheme: light) {
      color: #000;
      background: transparent;
    }
    &:before {
      content: "";
      position: absolute;
      left: -1rem;
      bottom: 0;
      background: linear-gradient(90deg, var(--sl-color-primary-900) 0%, var(--sl-color-primary-600) 100%);
      border-radius: 1rem;
      width: 4rem;
      height: .25rem;
      z-index: -1;
    }
  }
  /* Use the CODE block for general alert-style blocks when TEXT is specified as the language */
  .code-toolbar {
    pre {
      text-wrap: auto;
    }
    pre.language-text {
      border: 1px solid var(--color-blue-100);
      & + .toolbar {
        display: none; /* remove the toolbar when the language is TEXT */
      }
    }
  }
</style>

## Desk

- My primary computer is a [MacBook Pro 16" (M3)](https://www.apple.com/macbook-pro/), connected to an LG 32" ultrawide running at 2560 x 1440 resolution, with an external Keychron keyboard and Logitech mouse.
- The MacBook sits inside of a RainDesign vertical stand, as I use a sit-stand desk and there is no room to have the MacBook open.
- As part of my setup, I use an [Elgato Streamdeck MK.2 (white)](https://www.elgato.com/us/en/p/stream-deck-mk2-white) to help with switching between applications and not having to memorize keyboard shortcuts.
- All of my hardware and accessories are plugged into a [Caldigit TS3 Plus](https://www.caldigit.com/ts3-plus/) and I'll never go without one again!
- Everything sits on top of a custom, hand-made table that I built :-D

## Software

### Design

- [Figma](https://www.figma.com): current design tool for creating wireframes, mockups, and logos. I sync designs to Zeplin using the Figma plugin.
- [Zeplin](https://www.zeplin.io): for sharing designs with development and product teams. I've found it great for reviews, comment tracking on revisions, and exporting assets.

### Development

- While I've used [VSCode](https://code.visualstudio.com/) since its release, I'm writing this in [Cursor](https://www.cursor.com) to give it a try. While I find the "AI" stuff nice, I'm not sure I'll pay for it.
- Currently using [iTerm2](https://iterm2.com/) as my terminal, though I'm giving [Warp](https://www.warp.dev/) a try after hearing about it from [Wes Bos](https://wesbos.com).

### Services

- I like to set my device DNS to [1.1.1.1](https://one.one.one.one/), which is a free, private DNS from Cloudflare.
- Speaking of [Cloudflare](https://www.cloudflare.com/), I use it to monitor site traffic and such. Basic usage but I find it helpful.
- For the last six years, I've used [Netlify](https://www.netlify.com/) for previewing pull requests, running prototype sites, and user testing, but have recently switched to [Cloudflare Workers](https://workers.cloudflare.com).
- All of my sites are published using [Cloudflare Pages](https://pages.cloudflare.com/) with various actions (repository dependent) dictating how they are published.

## Desktop Apps

- [Arc browser](https://arc.net/download): my primary browser, though I also use Safari for creating web apps (Bluesky / Threads / GitHub).
- [Parallels Desktop](https://www.parallels.com/products/desktop/use-cases/developers/?extensionid=%7Bextensionid%7D&matchtype=b&device=c&devicemodel=&creative=&network=o&placement=&x-source=ppc): sometimes I need to use different operating systems and I turn to this for Windows 11, Ubuntu, and Fedora.
- Apple Notes: why use something else when this does the job? Tags, Smart Folders, and shortcuts are key.
- [Raycast](https://www.raycast.com/): switched off of Alfred a while back and found this to be indispensable in my daily work.

## Travel Gear

All of my travel gear fits into a [Peak Design 20L](https://www.peakdesign.com/products/everyday-backpack) 20L bag and a small "tech pouch" for cables, charging bricks, Beats Studio Buds, and my Logitech mouse.

## This Site

This site was created using [Eleventy](https://www.11ty.dev/) (Markdown + Nunjucks), after many years of trying out essentially everything that was "hip" at a given time. In the end, I just needed something simple that I could build upon, but also could be used for other projects (with an easy-to-simplify structure). For the UI, I use the [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/) system as I didn't want to write one from scratch. Various UI elements of the site are made using [Shoelace](https://shoelace.style/) (buttons, carousel, details - I'm really starting to get into [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)) with custom pieces on top.

```text
Be sure to check out uses.tech to see other /uses pages!
```

You can also find me on the [Eleventy Leaderboards](https://www.11ty.dev/speedlify/adamjolicoeur-com/)!
