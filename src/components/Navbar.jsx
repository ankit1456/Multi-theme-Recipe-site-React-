import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const pages = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="navbar__nav-links">
          {pages.map((page) => (
            <Link
              className={`${location.pathname === page.path ? " active" : ""}`}
              key={page.name}
              to={page.path}
            >
              {page.name}
            </Link>
          ))}
        </div>
        <div
          className={`navbar__hamburger ${showSidebar ? "active" : ""}`}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {showSidebar && (
        <Sidebar close={() => setShowSidebar(false)} pages={pages} />
      )}
    </>
  );
};

export default Navbar;
