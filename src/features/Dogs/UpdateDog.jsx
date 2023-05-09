import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Auth/Auth.context";
import "./DogsCss/UpdateDog.css";

export function UpdateDog() {
  const [dog, setDog] = useState(null);
  const { dogId } = useParams();
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function getDog() {
      const data = await fetch(`http://localhost:3000/dogs/${dogId}`).then(
        (res) => res.json()
      );
      setDog(data);
    }
    getDog();
  }, [dogId]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dogs", { replace: true });

    fetch("http://localhost:3000/dogs/" + dogId, {
      method: "PATCH",
      body: JSON.stringify({
        title: dog.title,
        description: dog.description,
        breed: dog.breed,
        date_of_birth: dog.date_of_birth,
        gender: dog.gender,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  if (!dog) {
    return null;
  }

  return (
    <div className="bottle">
      <h3>
        If you consider that the ad is written incorrectly, please modify it
        carefully.
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="bottle1">
          <div className ="bottle-25">
          <label htmlFor="title">Name:</label>
          </div>
          <div className ="bottle-75">
          <input
            type="text"
            name="title"
            value={dog.title}
            onChange={(e) => setDog({ ...dog, title: e.target.value })}
          />
          </div>
        </div>
        <div className="bottle1">
        <div className ="bottle-25">
          <label htmlFor="description">Description:</label> </div>
          <div className ="bottle-75">
          <textarea
            name="description"
            id="description"
            onChange={(e) => setDog({ ...dog, description: e.target.value })}
            value={dog.description}
          /> </div>
        </div>
        <div className ="bottle-25">
        <label htmlFor="date_of_birth">Date of birth:</label> </div>
        <div className ="bottle-75">
        <input
          type="date"
          name="date_of_birth"
          value={dog.date_of_birth}
          onChange={(e) => setDog({ ...dog, date_of_birth: e.target.value })}
        /> </div>
        <div className="bottle1">  <div className ="bottle-25">
          <label htmlFor="breed">Breed:</label> </div>
          <div className ="bottle-75">
          <input
            type="text"
            name="breed"
            id="breed"
            onChange={(e) => setDog({ ...dog, breed: e.target.value })}
            value={dog.breed}
          /> </div>
        </div>
        <div className="bottle1">  <div className ="bottle-25">
          <label htmlFor="gender">Gender:</label> </div>
          <div className ="bottle-75">
          <select
            name="gender"
            value={dog.gender}
            onChange={(e) => setDog({ ...dog, gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> </div>
        </div>
        <div className="bottle1">
          <button className="savebutton" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}