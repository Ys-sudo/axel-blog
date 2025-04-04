import React from "react";
import Layout from "../../components/Layout";
import BlogSection from "../../components/BlogSection";
import FullWidthImage from "../../components/FullWidthImage";
import HeroImg from "../../img/dziekujemy.jpg";
// eslint-disable-next-line

let CoolImg = { isCat: true, url: null, isContact: true };
CoolImg.url = HeroImg;

export default () => (
  <Layout>
    <FullWidthImage
      img={CoolImg}
      title={"Dziękujemy!"}
      subheading={`Nasz zespół skontaktuje się z Państwem w dni robocze do
            24h.`}
    />
    <section className="section">
      <h3 className="text-center mt-8 font-extrabold text-xl">
        Tymczasem zapraszamy do lektury naszych artykułów z bloga.
      </h3>
      <BlogSection />
    </section>
  </Layout>
);
