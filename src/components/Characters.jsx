import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Characters = (url) => {
    const[characterRaM ,setCharacterRaM]=useState({});
    useEffect(()=>{
        axios.get(url)
        .then(res=>setCharacterRaM(res.data));
    },[])
    console.log(characterRaM)
    return (
        <div>
            <li>{url}</li>
        </div>
    );
};

export default Characters;