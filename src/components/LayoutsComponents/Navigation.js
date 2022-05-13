// IMPORT MODULES
import "./css/Navigation.css"
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { Navigate, NavLink, Router } from "react-router-dom";
import { useLocation, useHref } from 'react-router-dom'
import * as React from 'react'


// MAIN FUNC
const Navigation = (props) => {



  // VAR POUR RÉCUPERER LE PATH
  const location = useLocation()
  // PROPS POUR LE TITRE ET LE LIEN DE NAV
  const { homeTitle, nasaTitle, weatherTitle, homeLink, nasaLink, weatherLink, homeIcon, nasaIcon, weatherIcon, link } = props
  console.log(location.pathname)
  // TRUC POUR LE CONTROLE K
  // const handleKeyPress = React.useCallback((event) => {
  //   if (event.ctrlKey === true && event.key === ("k" || "K")) {
  //     event.preventDefault();
  //     alert(`CTRL K ACTIVATED: ${event.key}`);
  //   }
  // })
  // React.useEffect(() => {
  //   document.addEventListener("keydown", handleKeyPress)
  // },[])

  // PAGE HTML
  return (
    <div className="navigation">
      <NavLink className='b' to={"/"}>
        {/* GESTION TITRES */}
        {location.pathname === "/" ? homeTitle
          : location.pathname === "/Nasa" ? nasaTitle
            : location.pathname === "/Weather" ? weatherTitle
              : "no title"}
        
        {/* GESTION ICONES */}
        {location.pathname === "/" ? homeIcon
          : location.pathname === "/Weather" ? weatherIcon
            : location.pathname === "/Nasa" ? nasaIcon
              : ""}
      </NavLink>



      <ul className="row">
        {/* <input className="inpoute" type="text" placeholder="ctrl + k" /> */}
        {
          link.map(link => {
            return <NavLink key={link} exact="true" to={location.pathname === "/" ? "/Weather" : location.pathname === "/Nasa" ? "/Weather" : location.pathname === "/Weather" ? "/Nasa" : "/Nasa"} activeclassname="active">
              {
                location.pathname === "/Weather" ? <BsArrowLeft size="40" /> : ""
              }
              {location.pathname === "/"
                ? <BsArrowRight size="40" />
                : location.pathname === "/Weather" ? <BsArrowRight size="40" /> : location.pathname === "/Nasa" ? <BsArrowLeft size="40" /> : <BsArrowRight size="40" />
              }



            </NavLink>
          })
        }
      </ul>
    </div>
  );
};

// EXPORT MODULE
export default Navigation;



// {location.pathname !== "/" ? homeIcon : nasaIcon}