import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const BlogRollTemplate = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:translate-y-2"
          >
            <article
              className={`p-6 ${
                post.frontmatter.featuredpost ? "border-l-4 border-primary" : ""
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
  );
};

BlogRollTemplate.propTypes = {
  posts: PropTypes.array,
};

export default function BlogRoll(props) {
  // If posts are provided (via props), use them.
  if (props.posts) {
    return <BlogRollTemplate posts={props.posts} />;
  }

  // Fallback: use StaticQuery if no posts prop is passed.
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 620
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <BlogRollTemplate posts={data.allMarkdownRemark.edges} />
      )}
    />
  );
}
