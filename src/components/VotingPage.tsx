// import React from "react";
import { useState, useEffect } from "react";

export interface dog {
	id: number;
	breed: string;
	votes: number;
}

export default function VotingPage():JSX.Element {
    const [imgOne, setImgOne] = useState<string|null>(null);
    const [imgTwo, setImgTwo] = useState<string|null>(null);
    
    const dogPicURL = "https://dog.ceo/api/breeds/image/random"
    const width = 200

    useEffect(() => {
        fetch(dogPicURL)
        .then(res => res.json())
        .then(data => setImgOne(data.message))
        fetch(dogPicURL)
        .then(res => res.json())
        .then(data => setImgTwo(data.message))
        console.log(imgOne,imgTwo)
    },[])

    const handleLike = (image:string) => {
        console.log(image)
    }
    return (
        <>
        {imgOne && imgTwo && 
            <div>
                <img src={imgOne} alt="" width={width}/>
                <img src={imgTwo} alt="" width={width}/>
                <button onClick={()=>handleLike(imgOne)}>LIKE</button>
                <button onClick={()=>handleLike(imgTwo)}>LIKE</button>
            </div>  
        }
        </>
    )
}

