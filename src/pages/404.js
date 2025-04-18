import * as React from "react";
import Layout from "../components/Layout";
import HeroImg from "../img/axel-travel-kategoria-podroze-2.jpeg";
import FullWidthImage from "../components/FullWidthImage";

let CoolImg = { isCat: true, url: null, isContact: true };
CoolImg.url = HeroImg;

const NotFoundPage = () => (
  <Layout>
    <FullWidthImage
      img={CoolImg}
      title={"404"}
      subheading={"Ups, strony nie znaleziono..."}
    />
    <div className="text-center mt-6 mb-6">
      <h2>NIE ZNALEZIONO</h2>
      <p>
        <a href="/" className="text-blue-700 underline">
          Niestety nie znaleziono niczego pod tym adresem. Wróć na bloga
        </a>
        .
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
