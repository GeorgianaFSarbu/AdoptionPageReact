import { useState } from "react";
import { useAuthContext, AuthContextProvider } from "../Auth/Auth.context";
import {  useNavigate } from "react-router-dom";
import "./UpdateProfile.css";

export function UpdateProfile() {
  let { user, token, login, setAuth, prevAuth } =
    useAuthContext(AuthContextProvider);
    const navigate = useNavigate();

  const [fName, setFName] = useState(user.fName);
  const [lName, setLName] = useState(user.lName);
  const [email, setEmail] = useState(user.email);
  const [adress, setAdress] = useState(user.adress);
  const [dateofbirth, setDateofbirth] = useState(user.date_of_birth);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/profilepage", { replace: true });

    setAuth((prevAuth = { ...prevAuth, user: { ...prevAuth.user } }));

    fetch("http://localhost:3000/users/" + user.id, {
      method: "PATCH",
      body: JSON.stringify({
        fName: fName,
        lName: lName,
        email: email,
        date_of_birth: dateofbirth,
        adress: adress,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const newUser = {
         ...user,
            fName: fName,
            lName: lName,
            email: email,
            date_of_birth: dateofbirth,
            adress: adress,
          };
          login({ accessToken: token, user: { newUser } });
        }
      })
      .catch((error) => {
        console.error("Failed to update user information:", error);
      });
  }

  if (!user) {
    return null;
  }

  return (
    <div className="box">
      <h3>Update your personal information</h3>
      <form onSubmit={handleSubmit}>
        <div className="box1">
          <div className="box-25">
            <label htmlFor="email">Email:</label>
          </div>
          <div className="box-75">
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="box1">
          <div className="box-25">
            <label htmlFor="fName">First name:</label>
          </div>
          <div className="box-75">
            <input
              type="text"
              id="fName"
              value={fName}
              onChange={(event) => setFName(event.target.value)}
            />
          </div>
        </div>
        <div className="box1">
          <div className="box-25">
            <label htmlFor="lName">Last name:</label>
          </div>
          <div className="box-75">
            <input
              type="text"
              id="lName"
              value={lName}
              onChange={(event) => setLName(event.target.value)}
            />
          </div>
        </div>
        <div className="box1">
          <div className="box-25">
            <label htmlFor="adress">Address:</label>
          </div>
          <div className="box-75">
            <input
              type="text"
              id="adress"
              value={adress}
              onChange={(event) => setAdress(event.target.value)}
            />
          </div>
        </div>

        <div className="box1">
          <div className="box-25">
            <label htmlFor="dateofbirth">Date of birth:</label>
          </div>
          <div className="box-75">
            <input
              type="date"
              id="dateofbirth"
              value={dateofbirth}
              onChange={(event) => setDateofbirth(event.target.value)}
            />
          </div>
        </div>
        <div className="box1">
          <button className="saveinfo" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
