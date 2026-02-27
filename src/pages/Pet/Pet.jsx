import React from 'react'
import './Pet.scss'
import allPets from '../../data/allPets'
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';

const Pet = () => {
    const {petName} = useParams();
    const pet = allPets.find((pet)=> pet.name.toLowerCase() === petName.toLowerCase());
    if (!pet) {
    return <h1 style={{ padding: "10vh" }}>Pet not found...</h1>;
  }
  return (
    <>
    <Navbar />
    <div className='petcont'>
        <h1>{pet.name}</h1>
    </div>
    </>
  )
}

export default Pet