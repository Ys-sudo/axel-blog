const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const POSTS_PER_PAGE = 6;

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const safeKebab = (input) => _.kebabCase(String(input || ""));
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              category
              templateKey
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()));
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  // Create individual blog post pages.
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        id: node.id,
      },
    });
  });

  // Paginate homepage (front page) with /pageNumber:
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  Array.from({ length: numPages }).forEach((_, i) => {
    const currentPage = i + 1;
    createPage({
      path: i === 0 ? `/` : `/${currentPage}`,
      component: path.resolve("src/templates/index-page.js"),
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numPages,
        currentPage,
      },
    });
  });

  // Paginate blog page with /blog/pageNumber:
  Array.from({ length: numPages }).forEach((_, i) => {
    const currentPage = i + 1;
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${currentPage}`,
      component: path.resolve("src/templates/blog.js"),
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numPages,
        currentPage,
      },
    });
  });

  // Create category pages with pagination.
  const categories = _.uniq(
    _.flatMap(posts, (post) => post.node.frontmatter.category || [])
  ).filter(Boolean); // Filter out null or undefined categories

  categories.forEach((category) => {
    const categoryPosts = posts.filter(
      (p) =>
        p.node.frontmatter.category &&
        p.node.frontmatter.category.includes(category)
    );

    const numCategoryPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);
    Array.from({ length: numCategoryPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/kategoria/${safeKebab(category)}/`
            : `/kategoria/${safeKebab(category)}/${i + 1}`,
        component: path.resolve("src/templates/category.js"),
        context: {
          category,
          limit: POSTS_PER_PAGE,
          skip: i * POSTS_PER_PAGE,
          numPages: numCategoryPages,
          currentPage: i + 1,
        },
      });
    });
  });

  // Create tag pages with pagination.
  const tags = _.uniq(
    _.flatMap(posts, (post) => post.node.frontmatter.tags || [])
  ).filter(Boolean); // Filter out null or undefined tags

  tags.forEach((tag) => {
    const taggedPosts = posts.filter(
      (p) => p.node.frontmatter.tags && p.node.frontmatter.tags.includes(tag)
    );

    const numTagPages = Math.ceil(taggedPosts.length / POSTS_PER_PAGE);
    Array.from({ length: numTagPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/tagi/${safeKebab(tag)}/`
            : `/tagi/${safeKebab(tag)}/${i + 1}`,
        component: path.resolve("src/templates/tags.js"),
        context: {
          tag,
          limit: POSTS_PER_PAGE,
          skip: i * POSTS_PER_PAGE,
          numPages: numTagPages,
          currentPage: i + 1,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
