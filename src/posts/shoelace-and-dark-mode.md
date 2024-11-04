---
title: Shoelace and Dark Mode
date: 2024-11-02
url: shoelace-and-dark-mode
author: Adam Jolicoeur
tags:
  - shoelace
  - development
---

<sl-badge variant="primary" pill>
  <sl-format-date month="long" day="numeric" year="numeric" date="{{ date }}"></sl-format-date>
</sl-badge>
<sl-badge variant="neutral" pill>
  {{ tags }}
</sl-badge>

# Shoelace &amp; Dark Mode

## Why?

As part of my update to utilize web components through Shoelace, I decided to go into dark mode as well given that Shoelace has built-in dark mode theme capabilities.

### Shoelace

Using Shoelace is a no-brainer for a few reasons:

1. I'll be using Web Awesome as soon as it is released (early backer) and well, Font Awesome acquired Shoelace. Moving over to Web Awesome *should* be straightforward.
2. Desire to learn and try something new
  - I've long believed that if you are stagnant in your learning and development of skills, then you'll be left behind in the blink of an eye.
3. I want to move away from "frameworks"
  - everywhere I go, React is the default front-end library with the entire framework built on top. Moving to a more agnostic and web standards method allows me to create something not reliant on javascript running.

### Dark Mode

With the majority of my applications utilizing dark mode (or a semblance of it) throughout the day, I knew it was time to at least **offer** that to those viewing my site. It also allows me to test out dark mode styles and accessibility options in a controlled environment.

## Resources

- [Shoelace](https://www.shoelace.style)
- [A complete guide to dark mode on the web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-separate-stylesheets)
- [Dark mode and variables fonts](https://css-tricks.com/dark-mode-and-variable-fonts/)
