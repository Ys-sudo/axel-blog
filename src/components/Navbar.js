import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenusVisible, setSubmenusVisible] = useState({});

  // Toggle main menu (for mobile)
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle submenus (for mobile view)
  const handleSubmenuToggle = (index) => {
    setSubmenusVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Close submenus when clicking outside
  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".nav-menu") &&
      !event.target.closest(".menu-toggle")
    ) {
      setMenuOpen(false);
      setSubmenusVisible({});
    }
  };

  // Handle submenu hover (desktop)
  const handleMouseEnter = (index) => {
    setSubmenusVisible((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setSubmenusVisible((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  // Listen for clicks outside (for closing the menu and submenus)
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div
        style={{
          minHeight: "20px",
          width: "100%",
          background: "blue",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          top: "0",
          zIndex: 1000,
        }}
      >
        <p style={{ color: "white", fontSize: "12px" }}>
          Axel Travel - Biuro podróży z ponad 30 letnią tradycją
        </p>
      </div>

      <div className="site-header">
        <div className="logo">
          <a href="https://axel-travel.pl/">
            <img
              src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/axel-travel-logo.png?v=1743012468506"
              alt="Logo"
            />
          </a>
        </div>

        <button className="menu-toggle" onClick={handleMenuToggle}>
          ☰
        </button>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="menu">
            <li
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <a href="https://axel-travel.pl/kierunki/">Kierunki</a>
              <span
                className="submenu-toggle"
                onClick={() => handleSubmenuToggle(0)}
              >
                ▼
              </span>
              <div className={`submenu ${submenusVisible[0] ? "show" : ""}`}>
                <ul>
                  <li>
                    <strong>Popularne</strong>
                  </li>
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
                </ul>
                <ul>
                  <li>
                    <strong>Polecane</strong>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/wyspy-kanaryjskie/">
                      Wyspy Kanaryjskie
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/madera/">Madera</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/malta/">Malta</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/cypr/">Cypr</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/wlochy/">Włochy</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/bulgaria/">Bułgaria</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>Egzotyka</strong>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/tajlandia/">Tajlandia</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/wietnam/">Wietnam</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/malezja/">Malezja</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/meksyk/">Meksyk</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/dominikana/">Dominikana</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/oman/">Oman</a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <a href="https://axel-travel.pl/oferta/">Oferta</a>
              <span
                className="submenu-toggle"
                onClick={() => handleSubmenuToggle(1)}
              >
                ▼
              </span>
              <div className={`submenu ${submenusVisible[1] ? "show" : ""}`}>
                <ul>
                  <li>
                    <a href="https://axel-travel.pl/all-inclusive/">
                      All inclusive
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/last-minute/">
                      Last minute
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/wycieczki-objazdowe/">
                      Wycieczki objazdowe
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/wakacje-dla-rodzin/">
                      Wakacje dla rodzin
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/romantyczne-wakacje/">
                      Romantyczne wakacje
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/city-break/">City Break</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/egzotyka/">Egzotyka</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://axel-travel.pl/hotele-dla-doroslych/">
                      Hotele dla dorosłych
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/dla-singli/">Dla singli</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/obozy-mlodziezowe/">
                      Obozy młodzieżowe
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/wakacje-nad-polskim-morzem/">
                      Polskie morze
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/dojazd-wlasny/">
                      Dojazd własny
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/zima/">Zima</a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/narty-w-gorach/">
                      Narty w górach
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <a href="/">Blog</a>
              <span
                className="submenu-toggle"
                onClick={() => handleSubmenuToggle(2)}
              >
                ▼
              </span>
              <div className={`submenu ${submenusVisible[2] ? "show" : ""}`}>
                <ul>
                  <li>
                    <a href="https://axel-travel.com/kategoria/porady/">
                      Porady
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.com/kategoria/bagaz-i-dokumenty/">
                      Bagaż i dokumenty
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.com/kategoria/reportaze-z-podrozy/">
                      Reportaże z podróży
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.com/kategoria/przed-podroza/">
                      Przed podróżą
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <a href="https://axel-travel.pl/o-nas/">O nas</a>
              <span
                className="submenu-toggle"
                onClick={() => handleSubmenuToggle(2)}
              >
                ▼
              </span>
              <div className={`submenu ${submenusVisible[2] ? "show" : ""}`}>
                <ul>
                  <li>
                    <a href="https://axel-travel.pl/o-nas/#ubezpieczenia">
                      Ubezpieczenia
                    </a>
                  </li>
                  <li>
                    <a href="https://axel-travel.pl/o-nas/#wyroznienia">
                      Wyróżnienia
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/kontakt/">Kontakt</a>
            </li>
          </ul>

          <div className="monogram-buttons">
            <a
              href="https://axel-travel.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="monogram-button">
                <img
                  width="15"
                  height="15"
                  src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/globe.svg?v=1743502353565"
                  alt="Globe"
                />
              </div>
            </a>
            <a
              href="https://www.flightradar24.com/51.10,17.03/6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="monogram-button">
                <img
                  width="15"
                  height="15"
                  src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/plane.svg?v=1743502350085"
                  alt="Plane"
                />
              </div>
            </a>
            <a href="tel:+48 76 846 67 66">
              <div className="monogram-button">
                <img
                  width="15"
                  height="15"
                  src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/mobile.svg?v=1743502347151"
                  alt="Phone"
                />
              </div>
            </a>
            <a href="mailto:biuro1@axel-travel.pl">
              <div className="monogram-button">
                <img
                  width="15"
                  height="15"
                  src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/e-mail.svg?v=1743502339789"
                  alt="Email"
                />
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
