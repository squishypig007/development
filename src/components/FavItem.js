import "./FavItemCss.css";
import { useEffect, useState } from "react";
export default function FavItem({movie, index, setFavorites, favorites, priceSetter, favoritesPrice,
    }){
       if(favorites.includes(movie.name)){
        return(
            <div class="favcard">
                <div>
                    <div className="words">
                        <br></br>
                        <h3>({index+1}) {movie.name}</h3>
                    </div>
                    <div className="words">
                    <img src= {movie.image} width="190vw"/>
                    <br></br>
                    </div>
                </div>
            </div>
        )
    }
}