import "./BakeryItemCss.css";
import { useEffect, useState } from "react";
export default function Button({movie, setFavorites, favorites, priceSetter, favoritesPrice,
    }){
        function handleClick() {
            //aggregator needs to get updated to account for only what is on dispaly
            if(!favorites.includes(movie.name)){
                setFavorites([...favorites, movie.name, " "]) ;
                priceSetter(favoritesPrice+movie.price)
            }
            else{
                const new_list = favorites.filter(function (x) {
                    return x !== movie.name;
                });
                setFavorites(new_list) ;
                priceSetter(favoritesPrice-movie.price)
            }
          }

    if(favorites.includes(movie.name)){
        return(
        <div>
            <button onClick={() => { 
                handleClick();
            }}>Remove from Favorites</button>
        </div>
    )
        }
        else{
            return(
                <div>
                    <button onClick={() => { 
                        handleClick();
                    }}>Add to Favorites</button>
                </div>
            )
        }
}