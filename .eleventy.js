const emojiRegex = require("emoji-regex");
const fs = require("fs");
const slugify = require("slugify");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const eleventyImageTransformPlugin = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const pluginTOC = require('eleventy-plugin-toc');
const pluginDropcap = require('eleventy-plugin-dropcap');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItHighlightJS = require('markdown-it-highlightjs')
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");
const packageVersion = require("./package.json").version;

// async function run() {
//   const { Importer } = await import("@11ty/import");

//   let importer = new Importer();

//   importer.setOutputFolder("./src/social/"); // --output
//   importer.setCacheDuration("24h"); // --cacheduration
//   importer.setVerbose(true); // --quiet
//   importer.setSafeMode(false); // --overwrite
//   importer.setDryRun(false); // --dryrun
//   importer.setDraftsFolder("drafts");
//   importer.setAssetsFolder("assets");
//   importer.setAssetReferenceType("relative"); // --assetrefs

//   // Sources (one or more)
//   importer.addSource("bluesky", "adamjol.bsky.social");

//   let entries = await importer.getEntries({
//       contentType: "markdown", // --format
//   });

//   await importer.toFiles(entries);

//   importer.logResults();
// }

// Execute the async function
// run().catch(console.error);

// Execute the async function
// run().catch(console.error);

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}

const mdAnchorOpts = {
  permalink: markdownItAnchor.permalink.linkInsideHeader({
    symbol: '#',
    class: 'anchor-link',
  }),
  level: [2, 3, 4]
}

module.exports = function (eleventyConfig) {
  if (process.env.ELEVENTY_ENV === "prod") {
    eleventyConfig.ignores.add("./src/posts/");
  };
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
    }
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(inclusiveLangPlugin, {
    templateFormats: ["md, html"], // default, add more file extensions here

    // accepts an array or a comma-delimited string
    words:
      "simply,obviously,basically,of course,clearly,just,everyone knows,however,easy",
  });

  // Create a custom key for Bluesky using "type"
  eleventyConfig.addCollection("specialCollection", function (collection) {
    return collection.getAll().filter((item) => item.data.type);
  });

  eleventyConfig.addPlugin(emojiReadTime);

  eleventyConfig.addWatchTarget("src/sass/*.scss");

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/webfonts");
  eleventyConfig.addPassthroughCopy("src/cache-polyfill.js");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/favicon.*");
  eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("src/android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("src/keybase.txt");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/sw.js");
  eleventyConfig.addPassthroughCopy("src/js/**");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("packageVersion", () => `v${packageVersion}`);

  /* Use for v3 upgrade in order to bypass the reservation of Collections name */
  eleventyConfig.setFreezeReservedData(false);

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

  // Markdown
  eleventyConfig.setLibrary(
    'md',
    markdownIt(mdOptions)
      .use(markdownItAnchor, mdAnchorOpts)
      .use(markdownItHighlightJS)
  );

  // Plugins
  // https://github.com/jdsteinbach/jdsteinbach.github.io/blob/blog/.eleventy.js
  // https://github.com/jdsteinbach/eleventy-plugin-toc
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3", "h4"],
    wrapper: "div",
    wrapperClass: "toc markdown-toc",
    ul: true,
    flat: true
  });
  eleventyConfig.addPlugin(
    pluginDropcap,
    {skipFirstParagraphClass: 'precursor'}
  );

  // Create Posts Collection
  // https://github.com/jdsteinbach/jdsteinbach.github.io/blob/blog/.eleventy.js
  eleventyConfig.addCollection('posts', collection => {
    return collection
      .getAllSorted()
      .reverse()
      .filter(item => {
        return item.inputPath.match(/^\.\/src\/posts\//) !== null
      })
  });

  // Create Posts Index Collection
  // https://github.com/jdsteinbach/jdsteinbach.github.io/blob/blog/.eleventy.js
  eleventyConfig.addCollection('postsIndex', collection => {
    return collection
      .getAllSorted()
      .reverse()
      .filter(item => {
        return item.inputPath.match(/^\.\/src\/posts\//) !== null
      })
      .slice(0, 8)
  });

  // Create Posts Feed Collection
  // https://github.com/jdsteinbach/jdsteinbach.github.io/blob/blog/.eleventy.js
  eleventyConfig.addCollection('postsFeed', collection => {
    return collection
      .getAllSorted()
      .reverse()
      .filter(item => {
        return item.inputPath.match(/^\.\/src\/posts\//) !== null
      })
      .slice(0, 10)
  });

  // Create Category Collections
  // https://github.com/jdsteinbach/jdsteinbach.github.io/blob/blog/.eleventy.js
  Array.from(['development', 'general', 'design', 'portfolio']).map(cat => {
    eleventyConfig.addCollection(cat, collection => {
      return collection
        .getAllSorted()
        .filter(item => {
          if ('categories' in item.data) {
            return item.data.categories.filter(category => {
              return category.toLowerCase() === cat.toLowerCase()
            }).length > 0
          }
          return false
        })
        .reverse()
    })
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
