import React, { useState, useEffect} from 'react'


function FavoriteColor(){

    const [favoriteColor, setFavoriteColor] = useState("Deep Purple")

    const [changeColor, setChangeColor] = useState("")

    useEffect(() => {
      const timer = setTimeout(() => {       
          setFavoriteColor("Purple Haze")
          setChangeColor("colorChanging")
        clearTimeout(timer)},2000)        
    }, [])
  return (
    <div>
        <h1 class="favoriteColor">
            My favorite color is <span className={changeColor}>{favoriteColor}</span>
        </h1>
    </div>    
    )
}

export default FavoriteColor