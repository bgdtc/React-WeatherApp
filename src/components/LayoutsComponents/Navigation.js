import "./css/Navigation.css"
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Navigation = (props) => {
  const location = useLocation()
  const { title, link } = props
  return (
    <div className="navigation">
      <NavLink to={"/"}>{location.pathname !== "/" ? "Weather" : title} </NavLink>
      <ul className="row">
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