import { useAuthContext, AuthContextProvider } from "../Auth/Auth.context";
import { Link, Navigate } from "react-router-dom";
import "./Profil.css";

export function Profil() {
  const { user } = useAuthContext(AuthContextProvider);

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapers.com/images/featured/0z48o9es589lfa5c.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="notebooks">
        <div className="notebook">
          <strong>First Name:</strong> {user.fName}
        </div>
        <div className="notebook">
          <strong>Last Name: </strong> {user.lName}
        </div>
        <div className="notebook">
          <strong>Email: </strong> {user.email}
        </div>
        <div className="notebook">
          <strong>Date of birth:</strong> {user.date_of_birth}
        </div>
        <div className="notebook">
          <strong>Address:</strong> {user.adress}
        </div>

        <Link className="editprofile" to="edit">
          Update your information
        </Link>
      </div>
    </div>
  );
}
