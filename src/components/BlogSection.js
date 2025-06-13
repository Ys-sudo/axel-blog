import React from "react";

const BlogSection = () => {
  const categories = [
    {
      name: "Porady",
      description:
        "Praktyczne porady dla podróżujących za granicę, sprawdzone wskazówki i polecane miejsca.",
      image: "https://axeltravel.pro/img/peru.jpg",
      link: "/kategoria/porady/",
    },
    {
      name: "Reportaże",
      description:
        "Reportaże z wyjątkowych miejsc – relacje z podróży z filmami i opiniami naszych agentów oraz klientów.",
      image: "https://axel-travel.pro/img/reportaze-z-podrozy.jpg",
      link: "/kategoria/reportaze-z-podrozy/",
    },
    {
      name: "Bagaże i dokumenty",
      description:
        "Wszystko, co musisz wiedzieć o dokumentach i bagażu – praktyczne, przydatne informacje.",
      image: "https://axel-travel.pro/img/bagaze-i-dokumenty.jpg",
      link: "/kategoria/bagaz-i-dokumenty/",
    },
    {
      name: "Przed podróżą",
      description:
        "Przygotuj się na wyprawę w nieznane – sprawdź nasze rekomendacje i wskazówki!",
      image: "https://axel-travel.pro/img/przed-podroza.jpg",
      link: "/kategoria/przed-podroza/",
    },
  ];

  return (
    <section className="blog-section dark:bg-gray-800 py-12">
      <h2 className="blog-title text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Dowiedz się, co sprawia, że podróże są naprawdę udane.
      </h2>
      <p className="blog-description text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
        Odkryj sekrety udanych podróży! Praktyczne porady, informacje o
        dokumentach i bagażach, a także inspirujące reportaże z wypraw naszych
        agentów i klientów. Zdradzamy sprawdzone sposoby na udane wyprawy,
        dowiedz się, co sprawia, że podróże są naprawdę udane.
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
