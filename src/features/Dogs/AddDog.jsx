import { useCallback, useEffect, useState } from 'react';
import { useAuthContext } from '../Auth/Auth.context';
import { useNavigate } from "react-router-dom";
import styles from './DogsCss/Dogs.module.css';


const initialDogValues = {
  
  title: '',
  description: '',
  breed: '',
  poster: '',
  producer: '',
  date_of_birth: '',
  gender: '',
 
};

export function AddDog() {
  
  const [dog, setDog] = useState(initialDogValues);
  const { user, token } = useAuthContext();
  const navigate = useNavigate();
  
  const handleInputChange = useCallback((e) => {
    
    setDog((oldDog) => {
      const newDog = { ...oldDog };
      if (e.target.type !== 'checkbox') {
       
        newDog[e.target.name] = e.target.value;
      } else {
        
        newDog[e.target.name] = new Set(newDog[e.target.name]);

        if (e.target.checked) {
         
          newDog[e.target.name].add(Number(e.target.value));
        } else {
         
          newDog[e.target.name].delete(Number(e.target.value));
        }
      }
      return newDog;
    });
  }, []);
 
  async function handleSubmit(e) {
    e.preventDefault();
    navigate('/dogs',{ replace: true });

    
    const dogObj = { ...dog, userId: user.id };

    await fetch('http://localhost:3000/dogs', {
      method: 'POST',
      body: JSON.stringify(dogObj),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    setDog(initialDogValues);
  }

  return (
    <>
      <h1>Add an ad</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>
          <label htmlFor="title"><strong>Dog's name:</strong></label>
          <input
            type="text"
            name="title"
            id="title"
            required
            onChange={handleInputChange}
            value={dog.title}
          />
        </p>
        <p>
          <label htmlFor="description"><strong>Describe your dog:</strong></label>
          <textarea
            name="description"
            id="description"
            onChange={handleInputChange}
            value={dog.description}
          />
        </p>
        <p>
          <label htmlFor="breed"><strong>Breed:</strong></label>
          <input
            type="text"
            name="breed"
            id="breed"
            required
            onChange={handleInputChange}
            value={dog.breed}
          />
        </p>
        <p>
          <label htmlFor="poster"><strong>Dog's picture:</strong></label>
          <input
            type="url"
            name="poster"
            id="poster"
            required
            onChange={handleInputChange}
            value={dog.poster}
          />
        </p>
        <p>
          <label htmlFor="producer"><strong>Kennel:</strong></label>
          <input
            type="text"
            name="producer"
            id="producer"
            onChange={handleInputChange}
            value={dog.producer}
          />
        </p>
        <p>
          <label htmlFor="date_of_birth"><strong>Date of birth:</strong></label>
          <input
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            required
            onChange={handleInputChange}
            value={dog.date_of_birth}
          />
        </p>
        <p>
          <label htmlFor="gender"><strong>Gender:</strong></label> 
          <select
            name="gender"
            id ="gender"
            required
            onChange={handleInputChange}
            value={dog.gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> 
        </p>
        <p>
          <button className={styles.button17} type="submit">Add the ad</button>
        </p>
      </form>
    </>
  );
}