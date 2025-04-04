import * as React from "react";
import Layout from "../components/Layout";
import HeroImg from "../img/axel-travel-kategoria-podroze-2.jpeg";
import FullWidthImage from "../components/FullWidthImage";
import TagsPill from "../components/TagsPill";
let CoolImg = { isCat: true, url: null, isContact: true };
CoolImg.url = HeroImg;

const TagiPage = () => (
  <Layout>
    <FullWidthImage
      img={CoolImg}
      title={"Tagi"}
      subheading={"Zbiór wszystkich tagów z bloga."}
    />
    <div className="text-center mt-6 mb-6">
      <h2 className="font-bold text-xl">Przeglądaj dostępne tagi</h2>

      <br />
      <TagsPill />
      <br />
      <p>
        <a href="/blog/" className="text-blue-700 underline">
          Wróć na bloga
        </a>
      </p>
      <br />
    </div>
  </Layout>
);

export default TagiPage;
