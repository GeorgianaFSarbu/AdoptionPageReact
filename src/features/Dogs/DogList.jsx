import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DogCard } from "./DogCard";
import { useAuthContext } from "../../features/Auth/Auth.context";
import './DogsCss/DogCard.css'

export function DogList() {
  const [dogs, setDogs] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    async function getDogs() {
      const data = await fetch("http://localhost:3000/dogs").then((res) =>
        res.json()
      );
      setDogs(data);
    }
    getDogs();
  }, []);

  if (!dogs) {
    return null;
  }

  return (
    <div>
      <h1 style={{background:"rgb(210, 210, 210)" }}> Dog & Puppy Adoption </h1>
      {dogs.map((dog) => (
        <DogCard  key={dog.id} dog={dog} />
      ))}
       {user && (
      <Link className="addDog" to="add">Add a Dog</Link> )}
    </div>
  );
}
