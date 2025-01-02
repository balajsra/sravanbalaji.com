module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  eleventyConfig.addFilter('findProjectAssociatedWithExperience', function (projects, associatedExperience) {
    return projects.filter(function(project) {
      return project.data.associatedExperience == associatedExperience;
    });
  })

  eleventyConfig.addCollection('professionalExperience', (collection) => {
    return collection
      .getFilteredByGlob('./src/portfolio/professionalExperience/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) < Number(b.data.displayOrder) ? 1 : -1));
  });

  eleventyConfig.addCollection('professionalExperienceProjects', (collection) => {
    return collection
      .getFilteredByGlob('./src/portfolio/professionalExperience/projects/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
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
