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
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-1"
          >
            <article
              className={`p-6 transition-all rounded-2xl ${
                post.frontmatter.featuredpost
                  ? "border-top-l-4 borde-top-blue-500"
                  : ""
              } bg-white dark:bg-gray-900`}
            >
              <header>
                {post?.frontmatter?.featuredimage && (
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl shadow-sm">
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
                <div className="flex flex-wrap items-center text-gray-800 dark:text-white">
                  <Link
                    className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {post.frontmatter.date}
                  </span>
                </div>
              </header>

              <p className="mt-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {post.excerpt}
                <br />
                <br />
                <Link
                  className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium transition-colors"
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
                  date(formatString: "DD.MM.YYYY")
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
