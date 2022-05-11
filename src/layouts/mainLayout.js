import Navigation from "../components/LayoutsComponents/Navigation";
// import { useLocation } from 'react-router-dom'
import React, { useState } from "react";
const MainLayout = ({ children }) => {

  // const location = useLocation()

  const [title] = useState("billes")
  const [navlink] = useState(["Weather"])
 

  // useEffect(() => {
  //   console.log("CONSOLGOGOL:", location)
  //   if (location.pathname === "/") {
  //     setNavlink(["Weather"])
  //   } else {
  //     setNavlink([""])
  //   }


  // },[])
  // const title = "Weather & Billes";
  
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