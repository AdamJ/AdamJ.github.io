const emojiRegex = require("emoji-regex");
const slugify = require("slugify");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const packageVersion = require("./package.json").version;
const fs = require("fs");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("./src/keybase.txt");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/webfonts");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/favicon.*");
  eleventyConfig.addPassthroughCopy("./src/cache-polyfill.js");
  eleventyConfig.addPassthroughCopy("./src/sw.js");
  eleventyConfig.addPassthroughCopy("./src/faviconData.json");
  eleventyConfig.addPassthroughCopy("./src/manifest.json");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("packageVersion", () => `v${packageVersion}`);

  // eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
  //   if(alt === undefined) {
  //     // You bet we throw an error on missing alt (alt="" works okay)
  //     throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  //   }

  //   let metadata = await Image(src, {
  //     widths: ["auto"],
  //     urlPath: "/src/img/",
  //     outputDir: "./docs/img/",
  //     formats: "png",
  //     loading: "lazy",
  //     decoding: "async",
  //   });

  //   let data = metadata.png[metadata.png.length - 1];
  //   return `<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async">`;

  // });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('./docs/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }

    const regex = emojiRegex();
    // Remove Emoji first
    let string = str.replace(regex, "");

    return slugify(string, {
      lower: true,
      replacement: "-",
      remove: /[*+~·,()'"`´%!?¿:@\/]/g,
    });
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    langPrefix: 'language-',
    linkify: true,
  })
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink({ safariReaderFix: true })
  })
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
