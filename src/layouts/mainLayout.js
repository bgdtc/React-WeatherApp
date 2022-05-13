import Navigation from "../components/LayoutsComponents/Navigation";
import { BsFillCloudRainFill } from 'react-icons/bs'
import { FaSpaceShuttle, FaHome } from 'react-icons/fa'
import React, { useState } from "react";
const MainLayout = ({ children }) => {

  // NAV TITRES
  const [nasaTitle] = useState(["Nasa Image Of The Day"])
  const [homeTitle] = useState(["Home"])
  const [weatherTitle] = useState(["Weather"])

  // NAV LINKS
  const [nasaLink] = useState(["Nasa"])
  const [link] = useState(["/"])
  const [homeLink] = useState(["/"])
  const [weatherlink] = useState(["Weather"])

  // NAV ICONS
  const [weatherIcon] = useState(<BsFillCloudRainFill className="title" size={25} />)
  const [nasaIcon] = useState(<FaSpaceShuttle className="title" color="#53b986" size={25} />)
  const [homeIcon] = useState(<FaHome className="title" size={25} />)
  return (
    <div className="App">
      <Navigation
        // NAV TITRES PROPS
        homeTitle={homeTitle}
        nasaTitle={nasaTitle}
        weatherTitle={weatherTitle}
        // NAV LINKS PROPS
        link={link}
        homeLink={homeLink}
        nasaLink={nasaLink}
        weatherlink={weatherlink}
        // NAV ICONS PROPS
        homeIcon={homeIcon}
        nasaIcon={nasaIcon}
        weatherIcon={weatherIcon} />
      {children}
    </div>
  );
};

export default MainLayout;



// { children }
// <Footer title={ title } />