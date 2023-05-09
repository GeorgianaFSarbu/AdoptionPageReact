import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../Auth/Auth.context';
import './DogsCss/DogDetails.css'

export function DogDetails() {
  const [dog, setDog] = useState(null);
  const { dogId } = useParams();
  const navigate = useNavigate();

  const { token, user } = useAuthContext();
  useEffect(() => {
    async function getDog() {
      const data = await fetch(`http://localhost:3000/dogs/${dogId}`).then(
        (res) => res.json()
      );
      setDog(data);
    }

    getDog();
  }, [dogId]);

  function handleDelete() {
    const cont = confirm('Are you sure you want to delete this dog?');
    if (cont) {
      fetch('http://localhost:3000/dogs/' + dogId, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/dogs');
    }
  }
 
  if (!dog) {
    return null;
  }

  return ( <>
    <div className="cards">
    <div className ="img"><img  width= "400" src={dog.poster} alt={`Poster for ${dog.title}`} />
    </div>
      <div className="card"><strong>Name:</strong> {dog.title}</div>
      <div className ="card"><strong>About: </strong> {dog.description}</div>
      <div className ="card"><strong>Gender:</strong> {dog.gender}</div>
      <div className ="card"><strong>Date of birth:</strong> {dog.date_of_birth}</div>
      <div className ="card"><strong>Breed:</strong> {dog.breed}</div>
      <div className ="card"><strong>Registerd Kennel:</strong> {dog.producer}</div>
      </div>
      <div className ="buttons">
      {user && (
      <Link className ="edit" to="edit">Edit</Link> 
      )}
         {user && (
      <button className ="delete" onClick={handleDelete}>Delete</button>
      )}
      </div>
  </>
  );
}
