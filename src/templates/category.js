import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import BlogSection from "../components/BlogSection";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";
import HeroImg from "../img/axel-travel-kategoria-podroze.jpg";
const CategoryTemplate = ({ pageContext }) => {
  const { category, categoryPosts } = pageContext;
  let CoolImg = { isCat: true, url: null };
  CoolImg.url = HeroImg;
  return (
    <Layout>
      <FullWidthImage
        img={CoolImg}
        title={"Artykuły z kategori"}
        subheading={category}
      />
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Zapraszamy do lektury postów z kategori {category}.
              </h2>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
                Najnowsze artykuły w kategori {category}.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {categoryPosts &&
                  categoryPosts.map(({ node: post }) => (
                    <div
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:translate-y-2"
                      key={post.id}
                    >
                      <article
                        className={`p-6 ${
                          post.frontmatter.featuredpost
                            ? "border-l-4 border-primary"
                            : ""
                        } bg-white dark:bg-gray-900 transition-all rounded-xl`}
                      >
                        <header>
                          {post?.frontmatter?.featuredimage && (
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg shadow-md">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.featuredimage,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                  width:
                                    post.frontmatter.featuredimage
                                      .childImageSharp.gatsbyImageData.width,
                                  height:
                                    post.frontmatter.featuredimage
                                      .childImageSharp.gatsbyImageData.height,
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
                            Keep Reading →
                          </Link>
                        </p>
                      </article>
                    </div>
                  ))}
              </div>

              <div className="flex justify-center mt-8">
                <Link
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  to="/blog"
                >
                  See All Posts
                </Link>
              </div>
            </div>

            <BlogSection />
            <BlogRoll />
          </div>
        </section>
      </div>
    </Layout>
  );
};

CategoryTemplate.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
    categoryPosts: PropTypes.array.isRequired,
  }),
};

export default CategoryTemplate;
