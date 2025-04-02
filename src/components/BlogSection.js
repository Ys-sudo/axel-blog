import React from "react";

const BlogSection = () => {
  const categories = [
    {
      name: "Porady",
      description: "Przydatne tipy, porady dla podróżujących za granicę.",
      image: "https://axeltravel.pro/img/peru.jpg",
      link: "/",
    },
    {
      name: "Reportaże",
      description: "Reportaże z miejscówek podróży z filmami i opiniami.",
      image:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/reportaze-z-podrozy.jpg?v=1743033849944",
      link: "/",
    },
    {
      name: "Bagaże i dokumenty",
      description: "Informacje na temat dokumentów i bagaży podczas podróży.",
      image:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/bagaze-i-dokumenty.jpg?v=1743033853029",
      link: "/",
    },
    {
      name: "Przed podróżą",
      description: "Poznaj zalecenia przed podróżą w nieznane!",
      image:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/przed-podroza.jpg?v=1743033847149",
      link: "/",
    },
  ];

  return (
    <section className="blog-section dark:bg-gray-800 py-12">
      <h2 className="blog-title text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Poznaj tajniki udanych podróży
      </h2>
      <p className="blog-description text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
        Przydatne porady, informacje o bagażach i dokumentach oraz reportaże z
        podróży naszych agentów oraz klientów!
      </p>
      <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Dynamically rendered categories */}
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="blog-card group relative overflow-hidden rounded-lg bg-white dark:bg-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="blog-overlay absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="text-sm">{category.description}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="text-center mt-12">
        <a href="/blog/" className="button-group">
          <button className="menu-button bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            wszystkie artykuły
          </button>
        </a>
      </p>
    </section>
  );
};

export default BlogSection;
