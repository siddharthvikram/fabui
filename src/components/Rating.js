import {FaStar} from "react-icons/fa";
import React, {useState} from 'react';

export function Rating({size}) 
  {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
      return(
        <div>
          {[...Array(5)].map((stars, i)=>{
            const ratingVal= i+1;

            return (
              <label>
              <input type="radio"
              name="ratings"
              className="radioHide" 
              value={ratingVal} 
              
              onClick={()=>setRating(ratingVal)}
              />
              <FaStar 
              className="star" 
              color={ratingVal<= ( hover || rating)? "#ffd700": "#7a7979"} 
              size={size}
              onMouseEnter={()=> setHover(ratingVal)}
              onMouseLeave={()=> setHover(0)}
              />
              </label>
             );
          })}
           
        </div>
        )
      }
      export default Rating; 