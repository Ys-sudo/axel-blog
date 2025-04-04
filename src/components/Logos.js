import React, { useEffect, useRef } from "react";

const items = [
  {
    link: "https://axel-travel.pl/itaka/",
    image:
      "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/itaka.jpg?v=1743016261768",
    alt: "Itaka",
  },
  {
    link: "https://axel-travel.pl/rainbow/",
    image:
      "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/rainbow-tours.jpg?v=1743016374298",
    alt: "Rainbow",
  },
  {
    link: "https://axel-travel.pl",
    image:
      "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/join-up.png?v=1743016376587",
    alt: "Join up",
  },
  {
    link: "https://axel-travel.pl/grecos/",
    image:
      "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/grecos.jpg?v=1743016379060",
    alt: "Grecos",
  },
  {
    link: "https://axel-travel.pl/anex/",
    image:
      "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/anex-tour-poland.png?v=1743016380937",
    alt: "Anex",
  },
  {
    link: "https://axel-travel.pl/coral-travel/",
    image:
      "https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/coral.jpg?v=1743016382845",
    alt: "Coral Travel",
  },
];

const Carousel = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const gap = 16; // Adjust based on Tailwind's gap-x-* utility
      const itemWidth = 160; // Approximate width of each item in px
      const totalItems = items.length * 2; // Duplicated for seamless looping
      const totalWidth = (itemWidth + gap) * totalItems;
      track.style.width = `${totalWidth}px`;

      // Calculate animation duration
      const duration = totalWidth / 50; // Adjust divisor for speed control
      track.style.animation = `scrollLoop ${duration}s linear infinite`;
    }
  }, []);

  return (
    <div className="overflow-hidden w-full py-4 relative">
      <div ref={trackRef} className="carousel-track whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="carousel-item flex-shrink-0 w-40">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.alt} className="w-full h-auto" />
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scrollLoop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
