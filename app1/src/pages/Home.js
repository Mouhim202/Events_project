import React, { useRef, useState } from "react";
import Events from "./Events"

const Home = () => {
    
    return ( <>
    <h1>Home</h1>
    <hr/>

    <Events  categorie="mariage"/>
    <hr/>
 
    <Events  categorie="naissance"/>
    <hr/>

    <Events  categorie="anneversaire"/>
    
    </> );
}

export default Home;