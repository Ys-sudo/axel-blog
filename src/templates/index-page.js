import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import GreekIslandsSlider from "../components/Greek";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import BlogSection from "../components/BlogSection";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  posts,
  pageContext,
}) => {
  const heroImage = getImage(image) || image;
  const { currentPage, numPages } = pageContext || {
    currentPage: 1,
    numPages: 1,
  };
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  // For the index page, adjust the link for the first page appropriately.
  const prevPage =
    currentPage - 1 === 1 ? "/#articles" : `/${currentPage - 1}#articles`;
  const nextPage = `/${currentPage + 1}#articles`;

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-lg font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
              {mainpitch.title}
            </h1>
            <h2 className="text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-gray-100">
              {mainpitch.description}
            </h2>
          </div>
          <div className="text-center -mt-6">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {heading}
            </h3>
            <p className="max-w-5xl mx-auto text-lg text-gray-700 dark:text-gray-300 mt-4">
              {description}
            </p>
          </div>

          <div id="#articles" className="pt-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
              Najnowsze artykuły
            </h3>
            <BlogRoll posts={posts} />
            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
              {!isFirst && (
                <Link
                  className="mx-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  to={prevPage}
                >
                  ← Poprzednia
                </Link>
              )}
              {Array.from({ length: numPages }).map((_, i) => (
                <Link
                  key={`pagination-number${i + 1}`}
                  className={`mx-2 px-3 py-1 rounded ${
                    i + 1 === currentPage
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  to={i === 0 ? "/#articles" : `/${i + 1}#articles`}
                >
                  {i + 1}
                </Link>
              ))}
              {!isLast && (
                <Link
                  className="mx-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  to={nextPage}
                >
                  Następna →
                </Link>
              )}
            </div>
            <div className="flex justify-center mt-8">
              <Link
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                to="/blog"
              >
                Sprawdź wszystkie
              </Link>
            </div>
          </div>
          <BlogSection />
          <GreekIslandsSlider />
          {/*<Features gridItems={intro.blurbs} />*/}
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  posts: PropTypes.array,
  pageContext: PropTypes.object,
};

const IndexPage = ({ data, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  const posts = data.posts.edges;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        posts={posts}
        pageContext={pageContext}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.object,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate($skip: Int!, $limit: Int!) {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                gatsbyImageData(width: 600, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
