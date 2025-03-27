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

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <Layout>
      <FullWidthImage
        img={CoolImg}
        title={capitalizeFirstLetter(category)}
        subheading={`Artykuły z kategori ${category}`}
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
                        {post.id}
                        <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
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
