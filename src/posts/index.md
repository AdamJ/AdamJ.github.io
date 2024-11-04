---
layout: blog
tag: index
---

# Blog Posts

<ul>
{%- for posts in collections.posts -%}
  <li>
    <a href="{{ posts.data.url | url }}">{{ posts.data.title }}</a><br/>
    <sl-format-date month="long" day="numeric" year="numeric" date="{{ post.data.date }}"></sl-format-date>
  </li>
{%- endfor -%}
</ul>
