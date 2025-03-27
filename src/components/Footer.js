import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <a href="#">
            <img
              src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/axel-travel-logo.png?v=1743012468506"
              alt="Company Logo"
              className="w-36 mb-4"
            />
          </a>
          <ul className="space-y-2">
            {[
              { name: "Blog", url: "/" },
              { name: "O nas", url: "/about" },
              { name: "Kontakt", url: "/kontakt" },
              { name: "Radar lotów", url: "#" },
              { name: "Ubezpieczenia", url: "#" },
              { name: "Globus podróżnika", url: "https://axel-travel.pro" },
              { name: "City break", url: "https://axel-travel.pro" },
            ].map((item) => (
              <li key={item.name}>
                <a href={item.url} className="hover:underline">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="font-bold mb-3">Kierunki</h3>
          <ul className="space-y-2">
            {["Turcja", "Grecja", "Hiszpania", "Albania", "City break"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="font-bold mb-3">Oferta</h3>
          <ul className="space-y-2">
            {["Last minute", "First minute", "City break"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="font-bold mb-3">Blog</h3>
          <ul className="space-y-2">
            {[
              "Dokumenty i bagaż",
              "Porady",
              "Przed podróżą",
              "Reportaże o miejscach",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="font-bold mt-6 mb-3">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:biuro1@axel-travel.pl"
                className="hover:underline"
              >
                biuro@axel-travel.pl
              </a>
            </li>
            <li>
              <a href="tel:+48768466766" className="hover:underline">
                +48 76 846 67 66
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Axel Travel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
