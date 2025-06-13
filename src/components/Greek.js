import React from "react";
const GreekIslandsSlider = () => {
  const islands = [
    {
      name: "Kreta",
      link: "https://axel-travel.pl/kreta/",
      imgSrc: "https://axel-travel.pro/img/kreta.jpeg",
      description:
        "Mityczna kraina z pałacem w Knossos, zapierającymi dech wąwozami i złocistymi plażami.",
    },
    {
      name: "Kos",
      link: "https://axel-travel.pl/kos/",
      imgSrc: "https://axel-travel.pro/img/kos.jpeg",
      description:
        "Wyspa Hipokratesa z rajskimi plażami, antycznymi ruinami i grecką gościnnością.",
    },
    {
      name: "Korfu",
      link: "https://axel-travel.pl/korfu/",
      imgSrc: "https://axel-travel.pro/img/korfu.jpeg",
      description:
        "Zielona perła Morza Jońskiego z malowniczymi zatoczkami i wenecką architekturą.",
    },
    {
      name: "Rodos",
      link: "https://axel-travel.pl/rodos/",
      imgSrc: "https://axel-travel.pro/img/rodos-widok-ptaka.jpeg",
      description:
        "Wyspa słońca z imponującym Starym Miastem i pięknymi plażami nad błękitnym morzem.",
    },
    {
      name: "Zakynthos",
      link: "https://axel-travel.pl/zakynthos/",
      imgSrc: "https://axel-travel.pro/img/zakynthos.jpeg",
      description:
        "Dom słynnej Zatoki Wraku, turkusowych jaskiń i uroczych miasteczek.",
    },
    {
      name: "Thassos",
      link: "https://axel-travel.pl/thassos/",
      imgSrc: "https://axel-travel.pro/img/thassos-2.jpeg",
      description:
        "Szmaragdowa wyspa z dziewiczą przyrodą, złotymi plażami i tradycyjnymi wioskami.",
    },
    {
      name: "Peloponez",
      link: "https://axel-travel.pl/peloponez/",
      imgSrc: "https://axel-travel.pro/img/peloponez.jpeg",
      description:
        "Historyczna kraina z antycznym Mykenami, Olimpią i malowniczymi wybrzeżami.",
    },
    {
      name: "Kefalonia",
      link: "https://axel-travel.pl/kefalonia/",
      imgSrc: "https://axel-travel.pro/img/kefalonia-2.jpeg",
      description:
        "Magiczna wyspa z bajkowymi jaskiniami, lazurowymi plażami i romantycznym klimatem.",
    },
    {
      name: "Mykonos",
      link: "https://axel-travel.pl/mykonos/",
      imgSrc: "https://axel-travel.pro/img/mykonos.jpeg",
      description:
        "Kosmopolityczna wyspa białych domków, luksusowych plaż i tętniącego życiem nocnego świata.",
    },
  ];

  return (
    <div className="text-center mt-12">
      <h2 className="text-xl">Wyspy Greckie</h2>
      <p>
        Twoja Wakacyjna Odyseja! Odwiedź legendarne greckie wyspy takie jak{" "}
        {islands.map((island, index) => (
          <strong key={index}>
            {island.name}
            {index < islands.length - 1 ? ", " : "."}
          </strong>
        ))}
      </p>
      <div id="horizontal-slider" className="horizontal-slider-container">
        <div className="horizontal-slider-wrapper">
          {islands.map((island, index) => (
            <a key={index} href={island.link}>
              <div className="horizontal-slide">
                <img src={island.imgSrc} alt={island.name} />
                <div className="horizontal-slide-desc">
                  <h3>{island.name}</h3>
                  <p>{island.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreekIslandsSlider;
