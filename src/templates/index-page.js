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
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <BlogSection />
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
          <div className="text-center mt-8">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {heading}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              {description}
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
              Najnowsze artykuły
            </h3>
            <BlogRoll />
            <div className="flex justify-center mt-8">
              <Link
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                to="/blog"
              >
                Sprawdź wszystkie
              </Link>
            </div>
          </div>
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
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

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
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
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
  }
`;
