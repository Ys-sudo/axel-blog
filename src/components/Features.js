import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
    {gridItems.map((item) => (
      <div
        key={item.text}
        className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div className="relative w-full h-48 bg-gray-200">
          <PreviewCompatibleImage
            imageInfo={item}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <p className="text-lg font-semibold text-gray-800">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
