import "./BakeryItemCss.css";
import Button from "./Button";
import { useEffect, useState } from "react";
export default function BakeryItem({movie, index, setFavorites, favorites, priceSetter, favoritesPrice,
    }){
    return(
        <div class="card">
        <div>
            <div className="words">
                <br></br>
                <h3>({index+1}) {movie.name}</h3>
            </div>
            <div className="words">
            <img src= {movie.image} alt="movie poster" width="190vw"/>
            <br></br>
            Price: ${movie.price}
            </div>
            <div className="words">
            Views: {movie.views}
            </div>
            <div className="words">
            Rating: {movie.rated}
            </div>
            <div className="description">
                {movie.description}
            </div>
            <div className="words">
            <Button movie={movie} setFavorites={setFavorites} favorites={favorites} priceSetter={priceSetter} favoritesPrice={favoritesPrice}/>
            <br></br>
            </div>
        </div>
        </div>
    )
}