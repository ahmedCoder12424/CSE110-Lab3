import { dummyNotesList } from "./constants"; 
import React, { useState, useEffect } from 'react';

export function Favorites (){


    
    const [buttonText, setButtonText] = useState('♡');
    const [isFavorite, setFavorite] = useState(false);
    setButtonText('♡');
    setFavorite(false);
   


    const handleClick = () => {
        
        if (isFavorite == true){

            setButtonText('♡');
            setFavorite(false);

        }
        else{
            setButtonText('❤️');
            setFavorite(true);
        }
        
     };
 
    return (

     <div> 
        <button onClick={() => handleClick} >
          {buttonText}
        </button>
     </div>



    );
}