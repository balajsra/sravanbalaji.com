const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  const mdLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
  });

  eleventyConfig.setLibrary("md", mdLib);

  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  eleventyConfig.addFilter(
    "findAssociation",
    function (entries, associatedEntry) {
      return entries.filter(function (entry) {
        return entry.data.associatedEntry == associatedEntry;
      });
    },
  );

  eleventyConfig.addCollection("professionalExperience", (collection) => {
    return collection
      .getFilteredByGlob("./src/portfolio/professionalExperience/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) < Number(b.data.displayOrder) ? 1 : -1,
      );
  });

  eleventyConfig.addCollection("education", (collection) => {
    return collection
      .getFilteredByGlob("./src/portfolio/education/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) < Number(b.data.displayOrder) ? 1 : -1,
      );
  });

  eleventyConfig.addCollection("highlights", (collection) => {
    return collection
      .getFilteredByGlob("./src/portfolio/highlights/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1,
      );
  });

  eleventyConfig.addCollection("software", (collection) => {
    return collection
      .getFilteredByGlob("./src/personal/software/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1,
      );
  });

  eleventyConfig.addCollection("blogPosts", (collection) => {
    return collection
      .getFilteredByGlob("./src/blog_posts/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1,
      );
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
