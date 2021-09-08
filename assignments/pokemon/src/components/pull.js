import React, { useState, useEffect } from 'react';


const Pull = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [isClicked, setIsClicked] = useState('false');

    useEffect(() => {
        if(isClicked === "true"){
            fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            console.log("You did click it.")
        }else{
            console.log('The button was not clicked.')
        }
        
    }, [isClicked]);

    const fetchPoke = () => {
        setIsClicked("true");
    }

    return (
        <div>
            <button onClick={fetchPoke}>Fetch</button>
            {pokemon.map((pokemon, index)=>{
                
                return (<div key={index}>Index: {index} name: {pokemon.name}
                </div>)
                
            
            })}
        </div>
    );
}
export default Pull;