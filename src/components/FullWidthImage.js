import React, { useState } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 600,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({
      x: (clientX / window.innerWidth - 0.5) * 20,
      y: (clientY / window.innerHeight - 0.5) * 20,
    });
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ height }}
    >
      {img?.url ? (
        <img
          src={img}
          style={{
            objectFit: "cover",
            objectPosition: imgPosition,
            width: "100%",
            height: "100%",
          }}
          alt=""
        />
      ) : (
        <GatsbyImage
          image={img}
          objectFit="cover"
          objectPosition={imgPosition}
          style={{ width: "100%", height: "100%" }}
          alt=""
          formats={["auto", "webp", "avif"]}
        />
      )}
      {(title || subheading) && (
        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white">
          <span className="text-lg uppercase tracking-widest">Blog</span>
          {title && (
            <h1
              className="text-2xl md:text-4xl font-extrabold"
              style={{
                transform: `translate(${mousePos.x}px, ${
                  mousePos.y
                }px) rotate(${mousePos.x / 10}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {title}
            </h1>
          )}
          {subheading && (
            <h3
              className="text-xl md:text-2xl font-semibold mt-2"
              style={{
                transform: `translate(${mousePos.x / 2}px, ${
                  mousePos.y / 2
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {subheading}
            </h3>
          )}
        </div>
      )}
    </div>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
