import React, { useState, useEffect, useRef, useCallback } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import BlogCard from "../components/BlogCard"; // New: individual post card component
import HeroImg from "../img/blog-hero.jpeg";
import BlogSection from "../components/BlogSection";
import TagsPill from "../components/TagsPill";
let CoolImg = { isCat: true, url: HeroImg, isContact: true };

const BlogIndexPage = ({ data, pageContext }) => {
  const allPosts = data.allMarkdownRemark.edges;
  const POSTS_PER_PAGE = pageContext.limit;
  const [visiblePosts, setVisiblePosts] = useState(
    allPosts.slice(0, POSTS_PER_PAGE)
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const loadMore = useCallback(() => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * POSTS_PER_PAGE;
    const nextPosts = allPosts.slice(start, start + POSTS_PER_PAGE);

    if (nextPosts.length > 0) {
      setVisiblePosts((prev) => [...prev, ...nextPosts]);
      setPage(nextPage);
    }
  }, [allPosts, page, POSTS_PER_PAGE]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loadMore, loading]);

  // Check if all posts are loaded
  const allLoaded = visiblePosts.length === allPosts.length;

  return (
    <Layout>
      <FullWidthImage
        img={CoolImg}
        title={"Blog"}
        subheading={
          "Świat czeka na odkrycie! Sprawdź, co warto wiedzieć przed podróżą dookoła świata, odkryj polecane miejsca, komfortowe hotele i ukryte perełki na mapie globu."
        }
      />
      <section className="section">
        <div className="container p-4 mx-auto mt-10">
          <h2 className="title text-2xl font-bold text-center">
            Zapraszamy do lektury
          </h2>
          <p className="max-w-full px-8 m-auto">
            <span className="font-semibold">
              Planujesz wyprawę dookoła świata?
            </span>
            <br />
            Dowiedz się, co warto wiedzieć – poznaj{" "}
            <strong>
              nasze rekomendacje, sprawdzone lokalizacje i wyjątkowe hotele w
              najciekawszych regionach globu
            </strong>
            .
          </p>

          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map(({ node }) => (
              <BlogCard key={node.id} post={node} />
            ))}
          </div>

          {/* Loader or "All posts loaded" message */}
          <div ref={loader} className="w-full h-12 mt-12 text-center">
            {allLoaded ? (
              <span>✅ Wszystkie posty załadowane</span>
            ) : (
              <span>⏳ Wczytywanie...</span>
            )}
          </div>
        </div>
      </section>
      <TagsPill />
      <BlogSection />
    </Layout>
  );
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            featuredimage {
              childImageSharp {
                gatsbyImageData(width: 600, quality: 80, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
