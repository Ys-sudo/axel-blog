import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const TagsPill = () => {
  // Fetching tags from MarkdownRemark using Gatsby's GraphQL data layer
  const data = useStaticQuery(graphql`
    query TagsQuery {
      allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const tags = data.allMarkdownRemark.group;

  return (
    <>
      <h2 className="text-center">Popularne tagi</h2>
      <div className="flex flex-wrap gap-2 justify-center mt-8 mb-8">
        {tags.map((tag) => (
          <Link
            key={tag.fieldValue}
            to={`/tagi/${tag.fieldValue.toLowerCase().replace(/\s+/g, "-")}`}
            className="no-underline text-xs px-4 py-2 text-sm font-semibold text-white hover:text-black rounded-full hover:bg-green-300 bg-gray-800 transition-colors duration-300 shadow-md"
          >
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        ))}
      </div>
    </>
  );
};

export default TagsPill;
