import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { tag, currentPage, numPages } = pageContext;
  const tagHeader = `${data.allMarkdownRemark.totalCount} post${
    data.allMarkdownRemark.totalCount === 1 ? "" : "y"
  } z tagiem “${tag}”`;

  // Base slug for the tag page.
  const tagSlug = `/tagi/${tag}`;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? tagSlug : `${tagSlug}/${currentPage - 1}`;
  const nextPage = `${tagSlug}/${currentPage + 1}`;

  return (
    <Layout>
      <section className="mt-16 px-4 sm:px-6 lg:px-8">
        <Helmet title={`${tag} | ${data.site.siteMetadata.title}`} />
        <div className="max-w-4xl mx-auto pt-20">
          <div className="mb-24">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              {tagHeader}
            </h3>

            <ul className="space-y-8">
              {posts.map(({ node }) => (
                <li key={node.fields.slug}>
                  <Link to={node.fields.slug} className="group block">
                    <h2 className="text-xl font-bold text-blue-600 group-hover:underline">
                      {node.frontmatter.title}
                    </h2>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Pagination Controls */}
            {numPages > 1 && (
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex gap-4 justify-center sm:justify-start">
                  {!isFirst && (
                    <Link
                      to={prevPage}
                      className="text-sm font-medium text-gray-600 hover:text-blue-600"
                    >
                      ← Previous
                    </Link>
                  )}
                  {!isLast && (
                    <Link
                      to={nextPage}
                      className="text-sm font-medium text-gray-600 hover:text-blue-600"
                    >
                      Next →
                    </Link>
                  )}
                </div>

                <ul className="flex flex-wrap justify-center gap-2">
                  {Array.from({ length: numPages }).map((_, i) => (
                    <li key={`tag-pagination-number${i + 1}`}>
                      <Link
                        to={i === 0 ? tagSlug : `${tagSlug}/${i + 1}`}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          i + 1 === currentPage
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        aria-label={`Goto page ${i + 1}`}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-12 text-center">
              <Link
                to="/tagi/"
                className="text-sm text-blue-600 hover:underline"
              >
                Przeglądaj wszystkie tagi
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

TagRoute.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    allMarkdownRemark: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String!, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
