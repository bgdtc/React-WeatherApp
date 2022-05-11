import "./css/Navigation.css"
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import * as React from 'react'

const Navigation = (props) => {
  const location = useLocation()
  const { title, link } = props
  // const handleKeyPress = React.useCallback((event) => {
  //   if (event.ctrlKey === true && event.key === ("k" || "K")) {
  //     event.preventDefault();
  //     alert(`CTRL K ACTIVATED: ${event.key}`);
  //   }
  // })
  // React.useEffect(() => {
  //   document.addEventListener("keydown", handleKeyPress)
  // },[])
  return (
    <div className="navigation">
      <NavLink to={"/"}>{location.pathname !== "/" ? "Weather" : title} </NavLink>
      <ul className="row">
      <input className="inpoute" type="text" placeholder="ctrl + k"/>
        {
          link.map(link => {
            return <NavLink key={link} exact="true" to={location.pathname !== "/" ? "/" : "Weather"} activeclassname="active">
              {location.pathname !== "/"
                ? <BsArrowLeft size="40" />
                : <BsArrowRight size="40" />}
                
            </NavLink>
            
          })
        }
      </ul>
    </div>
  );
};

export default Navigation;