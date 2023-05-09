import { Link } from "react-router-dom";
import "./DogsCss/DogCard.css";

export function DogCard({ dog }) {
  return (
    <div className="phonebooks">
      <div className="phonebook">
        <Link to={`${dog.id}`}>
          <img width="600" src={dog.poster} alt={`Poster for ${dog.title}`} />
          <div className="booktitle"> {dog.title} </div>
        </Link>
      </div>
    </div>
  );
}
