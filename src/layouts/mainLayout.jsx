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
  const [link] = useState(["/"])


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