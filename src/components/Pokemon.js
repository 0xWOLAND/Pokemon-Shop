import React from "react"
import "./styles/Pokemon.css"

function Pokemon(props){
    return (<div className="pokemon_card">
        <h1>{props.name}</h1>
        <img src={props.image} />
    </div>)
}

export default Pokemon;