import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { tag, currentPage, numPages } = pageContext;
  const tagHeader = `${data.allMarkdownRemark.totalCount} post${
    data.allMarkdownRemark.totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`;

  // Base slug for the tag page.
  const tagSlug = `/tagi/${tag}`;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? tagSlug : `${tagSlug}/${currentPage - 1}`;
  const nextPage = `${tagSlug}/${currentPage + 1}`;

  return (
    <Layout>
      <section className="section">
        <Helmet title={`${tag} | ${data.site.siteMetadata.title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <ul className="taglist">
                {posts.map(({ node }) => (
                  <li key={node.fields.slug}>
                    <Link to={node.fields.slug}>
                      <h2 className="is-size-2">{node.frontmatter.title}</h2>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Pagination Controls */}
              {numPages > 1 && (
                <div className="pagination is-centered">
                  {!isFirst && (
                    <Link className="pagination-previous" to={prevPage}>
                      Previous
                    </Link>
                  )}
                  {!isLast && (
                    <Link className="pagination-next" to={nextPage}>
                      Next page
                    </Link>
                  )}
                  <ul className="pagination-list">
                    {Array.from({ length: numPages }).map((_, i) => (
                      <li key={`tag-pagination-number${i + 1}`}>
                        <Link
                          to={i === 0 ? tagSlug : `${tagSlug}/${i + 1}`}
                          className={`pagination-link ${
                            i + 1 === currentPage ? "is-current" : ""
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

              <p>
                <Link to="/tagi/">Browse all tags</Link>
              </p>
            </div>
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
