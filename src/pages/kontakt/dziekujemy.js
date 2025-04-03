import React from "react";
import Layout from "../../components/Layout";
import BlogSection from "../../components/BlogSection";
// eslint-disable-next-line
export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Dziękujemy!</h1>
          <p>
            Nasz zespół skontaktuje się z Państwem zazwyczaj w dni robocze do
            24h. Tymczasem zapraszamy do lektury naszych artykułów z bloga.
          </p>
          <BlogSection />
        </div>
      </div>
    </section>
  </Layout>
);
