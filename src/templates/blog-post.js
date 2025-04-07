import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  category,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="bg-white mt-20 py-12 px-2">
      {helmet || ""}
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-lg text-gray-600">{description}</p>
          <div className="mt-8 text-sm">
            <Link
              to={`/kategoria/${kebabCase(category)}/`}
              className="inline-block bg-blue-700 text-gray-100 py-1 px-3 rounded-full hover:bg-blue-900 transition-colors"
            >
              {category}
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>
              <span className="font-semibold">Opublikowano:</span> {date}
            </p>
          </div>

          <PostContent content={content} className="mt-8" />

          {tags && tags.length ? (
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Tagi</h4>
              <ul className="flex flex-wrap space-x-4">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link
                      to={`/tagi/${kebabCase(tag)}/`}
                      className="inline-block bg-gray-200 text-gray-800 py-1 px-3 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  date: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        category={post.frontmatter.category}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        tags
        category
      }
    }
  }
`;
