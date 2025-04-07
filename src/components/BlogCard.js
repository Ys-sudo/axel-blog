import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogCard = ({ post }) => {
  const image = getImage(post.frontmatter.featuredimage);
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
      {image && (
        <GatsbyImage
          image={image}
          alt={post.frontmatter.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h3>
        <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
        <p className="mt-4 text-gray-700 line-clamp-3">
          {post.frontmatter.excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
