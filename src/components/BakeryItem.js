import "./BakeryItemCss.css";
import { useEffect, useState } from "react";
export default function BakeryItem({movie, index, countSetter, counter, setFavorites, favorites, priceSetter, favoritesPrice,
    }){
        const [buttonTxt, buttonTxtSetter] = useState("Add to Favorites");
        function handleClick() {
            //aggregator needs to get updated to account for only what is on dispaly
            if(buttonTxt==="Add to Favorites"){
                buttonTxtSetter("Remove from Favorites");
                setFavorites([...favorites, movie.name]) ;
                priceSetter(favoritesPrice+movie.price)
            }
            else{
                buttonTxtSetter("Add to Favorites");
                const new_list = favorites.filter(function (x) {
                    return x !== movie.name;
                });
                setFavorites(new_list) ;
                priceSetter(favoritesPrice-movie.price)
            }
          }
    return(
        <div class="card">
        <div>
            <div className="words">
                <br></br>
                <h3>({index+1}) {movie.name}</h3>
            </div>
            <div className="words">
            <img src= {movie.image} width="190vw"/>
            <br></br>
            Price: ${movie.price}
            {/* let ifFree;
            if ({movie.price}==0){
                <h2>FREE</h2>
            } */}
            </div>
            <div className="words">
            Views: {movie.views}
            </div>
            <div className="words">
            Rated: {movie.rated}
            </div>
            <div className="description">
                {movie.description}
            </div>
            <div className="words">
            <button onClick={() => { 
                handleClick();
                //countSetter(counter+1)
                // setCart([...cart_items, movie.name]) ;
                //priceSetter(counter_price+movie.price)
            }}>{buttonTxt}</button>
            <br></br>
            </div>
        </div>
        </div>
    )
}