import * as React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".nav-menu") &&
        !event.target.closest(".menu-toggle")
      ) {
        setMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    {
      name: "Kierunki",
      link: "/",
      submenu: [
        { name: "Porady", link: "/kategoria/porady" },
        { name: "Submenu 2", link: "/kategoria/porady" },
      ],
    },
    {
      name: "Oferta",
      link: "/",
      submenu: [
        { name: "Oferta 1", link: "#" },
        { name: "Oferta 2", link: "#" },
      ],
    },
    {
      name: "Blog",
      link: "/blog",
      submenu: [
        { name: "Blog 1", link: "/blog/" },
        { name: "Blog 2", link: "/blog/" },
      ],
    },
    {
      name: "O nas",
      link: "/",
      submenu: [
        { name: "O nas 1", link: "/o-nas/" },
        { name: "O nas 2", link: "/o-nas/" },
      ],
    },
  ];

  return (
    <header className="site-header">
      <div className="logo">
        <a href="/">
          <img
            src="https://cdn.glitch.global/6061b827-3701-4087-a4b1-a1aec1d09302/axel-travel-logo.png?v=1743012468506"
            alt="Logo"
          />
        </a>
      </div>
      <button className="menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="menu-item"
              onMouseEnter={() => !isMobile && setOpenSubmenu(index)}
              onMouseLeave={() => !isMobile && setOpenSubmenu(null)}
            >
              <a href={item.link}>{item.name}</a>
              {isMobile && (
                <span
                  className="submenu-toggle"
                  onClick={() => toggleSubmenu(index)}
                >
                  ▼
                </span>
              )}
              <ul className={`submenu ${openSubmenu === index ? "show" : ""}`}>
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.link}>{subItem.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <a href="/contact">Kontakt</a>
          </li>
        </ul>
        <div className="monogram-buttons">
          {["G", "S", "T", "M"].map((letter, index) => (
            <div key={index} className="monogram-button">
              {letter}
            </div>
          ))}
        </div>
      </nav>

      <style jsx>{`
        .site-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: white;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .logo img {
          height: 35px;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .menu {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        .menu li {
          position: relative;
        }
        .menu li a {
          text-decoration: none;
          color: black;
          font-size: 16px;
          padding: 10px;
          display: block;
        }
        .submenu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          list-style: none;
          min-width: 180px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 10px 0;
        }
        .submenu.show {
          display: block;
        }
        .submenu li a {
          color: black;
          padding: 8px 20px;
          display: block;
        }
        .menu-toggle {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .submenu-toggle {
          display: none;
          cursor: pointer;
          font-size: 18px;
          padding: 10px;
        }
        .monogram-buttons {
          display: flex;
          gap: 10px;
        }
        .monogram-button {
          width: 40px;
          height: 40px;
          border: 1px solid #ddd;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 10px 0;
          }
          .menu {
            flex-direction: column;
          }
          .menu li {
            text-align: left;
            position: relative;
          }
          .menu-toggle {
            display: block;
          }
          .submenu {
            position: static;
            display: none;
            box-shadow: none;
          }
          .submenu.show {
            display: block;
          }
          .submenu-toggle {
            display: inline-block;
            float: right;
          }
          .nav-menu.open {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
