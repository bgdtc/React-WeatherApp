import Navigation from "../components/LayoutsComponents/Navigation";
// import { useLocation } from 'react-router-dom'
import React, { useState } from "react";
const MainLayout = ({ children }) => {
  const [title] = useState("Nasa Iotd V-2.0")
  const [navlink] = useState(["Weather"])

  return (
    <div className="App">
      <Navigation title={title} link={navlink} />
      {children}
    </div>
  );
};

export default MainLayout;



// { children }
// <Footer title={ title } />