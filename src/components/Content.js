import * as React from "react";
import PropTypes from "prop-types";
// in your post layout or entry
import "./content.css";

export const HTMLContent = ({ content, className }) => (
  <div
    className={"content " + className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content, className }) => (
  <div className={"content " + className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
