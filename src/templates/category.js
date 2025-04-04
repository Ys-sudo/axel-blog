import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import _ from "lodash";
import Layout from "../components/Layout";
import BlogSection from "../components/BlogSection";
import FullWidthImage from "../components/FullWidthImage";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import HeroImg from "../img/axel-travel-kategoria-podroze.jpg";

const CategoryTemplate = ({ data, pageContext }) => {
  const { category, currentPage, numPages } = pageContext;
  const posts = data.allMarkdownRemark.edges;

  // Use the Hero image for this category page.
  const CoolImg = { isCat: true, url: HeroImg };

  // Capitalize the first letter of the category name.
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  // Base slug for this category.
  const categorySlug = `/kategoria/${_.kebabCase(category)}`;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? categorySlug : `${categorySlug}/${currentPage - 1}`;
  const nextPage = `${categorySlug}/${currentPage + 1}`;

  return (
    <Layout>
      <FullWidthImage
        img={CoolImg}
        title={capitalizeFirstLetter(category)}
        subheading={`Artykuły z kategorii ${category}`}
      />
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Zapraszamy do lektury postów z kategorii {category}.
              </h2>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
                Najnowsze artykuły w kategorii {category}.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {posts.map(({ node: post }) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:translate-y-2"
                  >
                    <article
                      className={`p-6 ${
                        post.frontmatter.featuredpost
                          ? "border-l-4 border-primary"
                          : ""
                      } bg-white dark:bg-gray-900 transition-all rounded-xl`}
                    >
                      <header>
                        {post.frontmatter.featuredimage && (
                          <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg shadow-md">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                width:
                                  post.frontmatter.featuredimage.childImageSharp
                                    .gatsbyImageData.width,
                                height:
                                  post.frontmatter.featuredimage.childImageSharp
                                    .gatsbyImageData.height,
                              }}
                            />
                          </div>
                        )}
                        <p className="text-gray-800 dark:text-white">
                          <Link
                            className="text-2xl font-bold text-primary dark:text-primary-light hover:text-primary-dark transition-all"
                            to={post.fields.slug}
                          >
                            {post.frontmatter.title}
                          </Link>
                          <span className="mx-2">•</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {post.frontmatter.date}
                          </span>
                        </p>
                      </header>
                      <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
                        {post.excerpt}
                        <br />
                        <br />
                        <Link
                          className="inline-block text-primary dark:text-primary-light hover:text-primary-dark font-medium transition-all"
                          to={post.fields.slug}
                        >
                          Przeczytaj artykuł →
                        </Link>
                      </p>
                    </article>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {numPages > 1 && (
                <div className="flex justify-center mt-8">
                  {!isFirst && (
                    <Link
                      to={prevPage}
                      className="mx-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      ← Poprzednia
                    </Link>
                  )}
                  {Array.from({ length: numPages }).map((_, i) => (
                    <Link
                      key={`pagination-number${i + 1}`}
                      to={i === 0 ? categorySlug : `${categorySlug}/${i + 1}`}
                      className={`mx-2 px-3 py-1 rounded ${
                        i + 1 === currentPage
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {i + 1}
                    </Link>
                  ))}
                  {!isLast && (
                    <Link
                      to={nextPage}
                      className="mx-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Następna →
                    </Link>
                  )}
                </div>
              )}
            </div>

            <BlogSection />
          </div>
        </section>
      </div>
    </Layout>
  );
};

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { in: [$category] } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
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
                gatsbyImageData(width: 620, quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
