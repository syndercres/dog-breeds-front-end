import { useState, useEffect } from "react";
import { BackendURL } from "../utils/BackendURL";

interface podiumProps {
    positions: string[]
}

function DogPodium(props: podiumProps): JSX.Element{
    console.log(props.positions)
    return(
        <div>
            <h3> The Winners Are...</h3>
            {props.positions.map((dog, i)=> <p key= {i}> {dog} </p> )}
        </div>



    )
}


export default DogPodium;