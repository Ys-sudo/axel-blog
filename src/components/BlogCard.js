import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogCard = ({ post }) => {
  const image = getImage(post.frontmatter.featuredimage);
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white">
      {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h3>
        <p className="text-sm text-gray-600">{post.frontmatter.date}</p>
        <p className="mt-2 text-gray-700">{post.frontmatter.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
