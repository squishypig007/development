import './App.css';
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import FavItem from "./components/FavItem";
import Cost from "./components/Cost";
import Rating from "./components/Rating";
import Views from "./components/Views";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const[favorites, setFavorites] = useState([]);
  const[price, setPrice] = useState(0);
  const[costValue, setCostValue] = useState("all");
  const[ratingValue, setRatingValue] = useState("all");
  const[sortValue, setSortValue] = useState("mosttoleast");
  const[favoriteValue, setfavoriteValue] = useState("all");

  const matchesFilterType = item => {
    if (matchesCostType(item) && matchesRatingType(item) 
    && matchesFavoriteType(item)
    ){
      return true
    }
    return false
  }

  const matchesCostType = item => {
    if (costValue === "all"){
      return true
    }
    else if(costValue === "free"){
      return item.price===0
    }
    else{
      return item.price!==0
    }
  }

  const matchesRatingType = item => {
    if (ratingValue === "all"){
      return true
    }
    else if(ratingValue === "r"){
      return item.rated==="R"
    }
    else{
      return item.rated!=="R"
    }
  }

  const matchesFavoriteType = item => {
    if (favoriteValue === "all"){
      return true
    }
    else{
      return favorites.includes(item.name)
    }
  }

  const matchesSortType = (a, b) => {
    if (sortValue === "mosttoleast"){
      return b.views - a.views
    }
    else{
      return a.views - b.views
    }
  }
  

  const filteredData = bakeryData.filter(matchesFilterType);
  const sortAndFilteredData = filteredData.sort(matchesSortType);

  return (
    <div className="App">
      <div className="title"><h1>Blockbuster Bros</h1></div>
      <div className="outermost_columns">

        <div className="menu">
        <h3>Menu</h3>
        <br></br>
        <Cost setCostValue={setCostValue}/>
        <Rating setRatingValue={setRatingValue}/>
        <Views setSortValue={setSortValue}/>
        <FavItem setfavoriteValue={setfavoriteValue}/>
        <br></br>
      <div className="favoriteDiv">
        {<h4>Total Price of Favorites:</h4>} <div className="h5">${price.toFixed(2)}</div>
      </div>
        </div>
        <div className="wrapper_bakery_item">
          {sortAndFilteredData.map((item, index) => (
            <BakeryItem movie={item} index={index} setFavorites={setFavorites} favorites={favorites} priceSetter={setPrice} favoritesPrice={price}/> 
          ))}
        </div> 
      </div>
    </div>
  );
}

export default App;
