import * as React from "react";

import { getCalApi } from "@calcom/embed-react";
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

  componentDidMount() {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
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
            <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-lg font-bold">Biuro obsługi klienta</h3>
                <h4 className="flex items-center text-lg mb-6">
                  <img
                    src="/img/clock.svg"
                    alt="godziny otwarcia"
                    className="w-5 h-5 mr-4"
                  />
                  pon. - pt. 9:00 - 17:00
                </h4>
                <p className="flex items-center">
                  <img
                    src="/img/map-marker-alt.svg"
                    alt="ulica"
                    className="w-5 h-5 mr-4"
                  />
                  ul. Odrodzenia 7a
                </p>
                <p className="flex items-center">
                  <img
                    src="/img/globe.svg"
                    alt="miasto"
                    className="w-5 h-5 mr-4"
                  />
                  59-300 Lubin
                </p>

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
                    style={{ cursor: "pointer" }}
                    className="flex justify-between items-center px-4 py-2 bg-blue-700 text-center text-white rounded-md hover:bg-blue-500"
                    data-cal-link="george-dev/30min"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Umów się na konsultacje
                    <img
                      src="/img/calendar-days-solid.svg"
                      alt="kalendarz"
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

              <div className="md:w-1/2">
                <h4 className="text-lg font-bold">Formularz kontaktowy</h4>
                <h4 className="mb-6">Wyślij nam wiadomość!</h4>
                <ContactForm />
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
