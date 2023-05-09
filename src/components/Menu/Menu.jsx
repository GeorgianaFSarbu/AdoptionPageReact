import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../features/Auth/Auth.context";
import { CgProfile } from "react-icons/cg";
import { GiSittingDog } from "react-icons/gi";
import { RiLogoutCircleLine} from "react-icons/ri";
import "./Menu.css";

export function Menu() {
  const { user, logout } = useAuthContext();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
           <GiSittingDog />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/dogs">Find a pet</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            
          
            {user && (
              <li className="toProfilePage">
                <NavLink to="/profilepage"><CgProfile/></NavLink>
              </li>
            )}
             {user && (
              <li  className="logout">
                Hello {user.fName}! &nbsp;&nbsp;
                <a href="#" onClick={() => logout()}>
                < RiLogoutCircleLine/>
                </a>
              </li>
            )}
            {!user && (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
