import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Dynamically update the year in the footer
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.innerText = new Date().getFullYear();
    }
  }, []);

  return (
    <>
      <img
        style={{
          maxHeight: "300px",
          objectFit: "cover",
          width: "100%",
          marginBottom: "-15px",
        }}
        src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/footer-top.jpg?v=1743028178022"
        alt="Footer top"
      />
      <footer className="footer" style={{ paddingTop: "40px" }}>
        <div className="footer-container">
          <div className="footer-column">
            <a href="https://axel-travel.pl">
              <img
                src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/axel-travel-logo.png?v=1743012468506"
                alt="Company Logo"
                className="footer-logo"
                style={{
                  marginBottom: "4px",
                  maxWidth: "150px",
                  height: "auto",
                }}
              />
            </a>
            <ul className="footer-links">
              <li>
                <a href="https://axel-travel.pl">Home</a>
              </li>
              <li>
                <a href="https://axel-travel.com">Blog</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/o-nas/">O nas</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/oferta/">Oferta</a>
              </li>
              <li>
                <a href="https://axel-travel.com/kontakt/">Kontakt</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/kierunki/">Kierunki</a>
              </li>
              <li>
                <a href="https://www.flightradar24.com/51.10,17.03/6">
                  Radar lotów
                </a>
              </li>
              <li>
                <a href="https://axel-travel.pl/o-nas/#ubezpieczenia">
                  Ubezpieczenia
                </a>
              </li>
              <li>
                <a href="https://axel-travel.pro">Globus podróżnika</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>
              <a href="https://axel-travel.pl/kierunki/">Kierunki</a>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="https://axel-travel.pl/turcja/">Turcja</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/grecja/">Grecja</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/hiszpania/">Hiszpania</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/albania/">Albania</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/egipt/">Egipt</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/tunezja/">Tunezja</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/wyspy-kanaryjskie/">
                  Wyspy kanaryjskie
                </a>
              </li>
              <li>
                <a href="https://axel-travel.pl/cypr/">Cypr</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/tajlandia/">Tajlandia</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/meksyk/">Meksyk</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>
              <a href="https://axel-travel.pl/oferta/">Oferta</a>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="https://axel-travel.pl/last-minute/">Last minute</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/all-inclusive/">
                  All inclusive
                </a>
              </li>
              <li>
                <a href="https://axel-travel.pl/wycieczki-objazdowe/">
                  Wycieczki objazdowe
                </a>
              </li>
              <li>
                <a href="https://axel-travel.pl/rejsy/">Rejsy</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/city-break/">City break</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/hotele-dla-doroslych/">
                  Hotele 18+
                </a>
              </li>
              <li>
                <a href="https://axel-travel.pl/zima/">Zimowe</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/wakacje-dla-rodzin/">
                  Dla rodzin
                </a>
              </li>
              <li>
                <a href="https://axel-travel.pl/egzotyka/">Egzotyka</a>
              </li>
              <li>
                <a href="https://axel-travel.pl/narty-w-gorach/">Narty</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>
              <a href="https://axel-travel.com">Blog</a>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="https://axel-travel.com/kategoria/porady/">
                  Dokumenty i bagaż
                </a>
              </li>
              <li>
                <a href="https://axel-travel.com/kategoria/bagaz-i-dokumenty/">
                  Porady
                </a>
              </li>
              <li>
                <a href="https://axel-travel.com/kategoria/reportaze-z-podrozy/">
                  Przed podróżą
                </a>
              </li>
              <li>
                <a href="https://axel-travel.com/kategoria/przed-podroza/">
                  Reportaże o miejscach
                </a>
              </li>
            </ul>
            <h3 style={{ marginTop: "45px" }}>
              <a href="https://axel-travel.com/kontakt/">Kontakt</a>
            </h3>
            <ul className="footer-links" style={{ fontSize: "12px" }}>
              <li>
                <a href="mailto:biuro1@axel-travel.pl">biuro@axel-travel.pl</a>
              </li>
              <li>
                <a href="tel:+48 76 846 67 66">+48 76 846 67 66</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <a
            href="https://tiktok.com/@axel.travel.pl"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Axel travel tiktok"
              src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/tiktok.svg?v=1743521559456"
              width="25"
              height="25"
            />
          </a>
          <a
            href="https://www.instagram.com/axel.travel.pl"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Axel travel instagram"
              src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/instagram.svg?v=1743521567193"
              width="25"
              height="25"
            />
          </a>
        </div>
      </footer>

      <div className="footer-bottom" style={{ padding: "20px" }}>
        <p style={{ fontSize: "12px" }}>
          <a href="https://axel-travel.pl/privacyrodo/">Polityka prywatności</a>{" "}
          | <a href="https://axel-travel.pl/cookies/">Cookies</a> |{" "}
          <a href="https://axel-travel.pl/regulamin">Regulamin</a>
          <br /> <br />
          &copy; 1991- <span id="year"></span>{" "}
          <a
            style={{ color: "white", textDecoration: "underline" }}
            href="https://axel-travel.pl"
          >
            Axel Travel Biuro Podróży
          </a>{" "}
          - wszelkie prawa zastrzeżone
        </p>
      </div>
    </>
  );
};

export default Footer;
