import { useState } from "react";
import SideBar from "./SideBar";
import {faHome, faCookie, faListAlt ,faFaceSmileBeam, faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [showSideBar, setshowSideBar] = useState(true);
  const links = [
    {
      name: "Home",
      path: "/home",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faCookie
    },
    {
      name: "Categories",
      path: "/categories",
      icon: faListAlt 
    },
    {
      name: "Account",
      path: "/account",
      icon: faFaceSmileBeam
    },
  ];
  function closeSideBar(){
    setshowSideBar(false);
  }
  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          Flav<span>or</span>Flex
        </a>
        <div className="nav-links">
          {links.map(link => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="search">
            <FontAwesomeIcon icon={faSearch}/>
            <input placeholder="Search"></input>
        </div>
        <div
          onClick={() => setshowSideBar(!showSideBar)}
          className={showSideBar ? "sidebar-button active" : "sidebar-button"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <SideBar close={closeSideBar} links={links} />}
    </>
  );
}
