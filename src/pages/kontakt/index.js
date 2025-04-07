import * as React from "react";

import Cal from "@calcom/embed-react";
import Layout from "../../components/Layout";
import MapContainer from "../../components/Map";
import ContactForm from "../../components/Form";
import FullWidthImage from "../../components/FullWidthImage";
import HeroImg from "../../img/kontakt-hero.jpg";

import BlogSection from "../../components/BlogSection";

let CoolImg = { isCat: true, url: null, isContact: true };
CoolImg.url = HeroImg;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  render() {
    return (
      <Layout>
        <>
          <FullWidthImage
            img={CoolImg}
            title={"Kontakt"}
            subheading={"Zapraszamy na darmową rozmowę!"}
          />
          <section className="py-10">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h4 className="text-lg font-bold">Umów się na rozmowę</h4>
                <h4 className="mb-6">Porozmawiaj z naszym agentem!</h4>

                <Cal
                  calLink="axel-travel-tmln7g/30min"
                  config={{
                    theme: "dark",
                    styles: { branding: { brandColor: "#000000" } },
                    hideEventTypeDetails: true,
                    layout: "month_view",
                  }}
                ></Cal>
              </div>

              <div className="md:w-1/2">
                <h4 className="text-lg font-bold">Formularz kontaktowy</h4>
                <h4 className="mb-6">Wyślij nam wiadomość!</h4>
                <ContactForm />
                <h4 className="mt-6 mb-4">Kontakt mailowy lub telefoniczny:</h4>
                <div className="space-y-4">
                  <a
                    href="mailto:biuro1@axel-travel.pl"
                    className="flex justify-between items-center px-4 py-2 bg-blue-700 text-center text-white rounded-md hover:bg-blue-500"
                  >
                    biuro@axel-travel.pl
                    <img
                      src="/img/e-mail.svg"
                      alt="email"
                      className="w-5 h-5 mr-4 invert"
                    />
                  </a>
                  <a
                    href="tel:+48 76 846 67 66"
                    className="flex justify-between items-center px-4 py-2 bg-blue-700 text-center text-white rounded-md hover:bg-blue-500"
                  >
                    +48 76 846 67 66
                    <img
                      src="/img/mobile.svg"
                      alt="numer telefonu"
                      className="w-5 h-5 mr-4 invert"
                    />
                  </a>
                  <a
                    href="https://liveroom.merlinx.eu/pl/880090001/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: "pointer" }}
                    className="flex justify-between items-center px-4 py-2 bg-blue-700 text-center text-white rounded-md hover:bg-blue-500"
                  >
                    Liveroom
                    <img
                      src="/img/headset-solid.svg"
                      alt="kalendarz"
                      className="w-5 h-5 mr-4 invert"
                    />
                  </a>
                </div>
              </div>
            </div>

            <BlogSection />
            <MapContainer />
          </section>
        </>
      </Layout>
    );
  }
}
