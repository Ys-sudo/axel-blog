import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="mt-20 py-16 px-4 sm:px-6 lg:px-8">
      <Helmet title={`Tags | ${title}`} />
      <div className="max-w-4xl mx-auto">
        <div className="mb-24">
          <h1 className="text-3xl font-bold text-gray-800 mb-10">Tagi</h1>
          <ul className="flex flex-wrap gap-4">
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                <Link
                  to={`/tagi/${kebabCase(tag.fieldValue)}/`}
                  className="inline-block px-4 py-2 bg-gray-100 hover:bg-blue-100 text-blue-700 rounded-full text-sm font-medium transition"
                >
                  {tag.fieldValue}{" "}
                  <span className="text-gray-500">({tag.totalCount})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
