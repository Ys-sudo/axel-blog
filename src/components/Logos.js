import React, { useEffect, useRef } from "react";

const items = [
  {
    link: "https://axel-travel.pl/itaka/",
    image: "https://axel-travel.pro/img/itaka.jpg",
    alt: "Itaka",
  },
  {
    link: "https://axel-travel.pl/rainbow/",
    image: "https://axel-travel.pro/img/rainbow-tours.jpg",
    alt: "Rainbow",
  },
  {
    link: "#",
    image: "https://axel-travel.pro/img/join-up.png",
    alt: "Join up",
  },
  {
    link: "https://axel-travel.pl/grecos/",
    image: "https://axel-travel.pro/img/grecos.jpg",
    alt: "Grecos",
  },
  {
    link: "https://axel-travel.pl/anex/",
    image: "https://axel-travel.pro/img/anex-tour-poland.png",
    alt: "Anex",
  },
  {
    link: "https://axel-travel.pl/coral-travel/",
    image: "https://axel-travel.pro/img/coral.jpg",
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
