import React from "react";
const GreekIslandsSlider = () => {
  const islands = [
    {
      name: "Kreta",
      link: "https://axel-travel.pl/kreta/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/kreta.jpeg?v=1743545849387",
      description:
        "Mityczna kraina z pałacem w Knossos, zapierającymi dech wąwozami i złocistymi plażami.",
    },
    {
      name: "Kos",
      link: "https://axel-travel.pl/kos/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/kos.jpeg?v=1743545400916",
      description:
        "Wyspa Hipokratesa z rajskimi plażami, antycznymi ruinami i grecką gościnnością.",
    },
    {
      name: "Korfu",
      link: "https://axel-travel.pl/korfu/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/korfu.jpeg?v=1743545404434",
      description:
        "Zielona perła Morza Jońskiego z malowniczymi zatoczkami i wenecką architekturą.",
    },
    {
      name: "Rodos",
      link: "https://axel-travel.pl/rodos/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/rodos-widok-ptaka.jpeg?v=1743545752397",
      description:
        "Wyspa słońca z imponującym Starym Miastem i pięknymi plażami nad błękitnym morzem.",
    },
    {
      name: "Zakynthos",
      link: "https://axel-travel.pl/zakynthos/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/zakynthos.jpeg?v=1743545509541",
      description:
        "Dom słynnej Zatoki Wraku, turkusowych jaskiń i uroczych miasteczek.",
    },
    {
      name: "Thassos",
      link: "https://axel-travel.pl/thassos/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/thassos-2.jpeg?v=1743545761613",
      description:
        "Szmaragdowa wyspa z dziewiczą przyrodą, złotymi plażami i tradycyjnymi wioskami.",
    },
    {
      name: "Peloponez",
      link: "https://axel-travel.pl/peloponez/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/peloponez.jpeg?v=1743545748433",
      description:
        "Historyczna kraina z antycznym Mykenami, Olimpią i malowniczymi wybrzeżami.",
    },
    {
      name: "Kefalonia",
      link: "https://axel-travel.pl/kefalonia/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/kefalonia-2.jpeg?v=1743546088923",
      description:
        "Magiczna wyspa z bajkowymi jaskiniami, lazurowymi plażami i romantycznym klimatem.",
    },
    {
      name: "Mykonos",
      link: "https://axel-travel.pl/mykonos/",
      imgSrc:
        "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/mykonos.jpeg?v=1743545768081",
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
