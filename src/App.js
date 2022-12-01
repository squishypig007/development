import logo from './logo.svg';
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
  // const[finalFavorites, setFinalFavorites] = useState([]);

  const matchesFilterType = item => {
    if (matchesCostType(item) && matchesRatingType(item)){
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
      return item.price!=0
    }
  }

  const matchesRatingType = item => {
    if (ratingValue === "all"){
      return true
    }
    else if(ratingValue === "r"){
      console.log("entered R condition")
      return item.rated==="R"
    }
    else{
      return item.rated!="R"
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

  // const displayFavorites = favorites_list => {
  //   for(let i = 0; i < favorites_list.length; i++) {
  //     if(i===favorites_list.length-1){
  //       setFinalFavorites([...finalFavorites, favorites_list[i]])
  //     }
  //     else{
  //       setFinalFavorites([...finalFavorites, favorites_list[i], ", "])
  //     }
  //   }
  // }

  // displayFavorites({favorites});
  
  
  //sort based on views/popularity
  //i'm doing and filtering (intersections)
  //filter on Free/paid
  //pg-13/r filter
  //aggregator price of favorites - does not need to work w filter and sort
  return (
    <div className="App">
      <div className="title">
        <h1>Blockbuster Rentals</h1></div>
      <div className="outermost_columns">

        <div className="menu">
        <h3>Movie Menu</h3>
        <Cost setCostValue={setCostValue}/>
        <Rating setRatingValue={setRatingValue}/>
        <Views setSortValue={setSortValue}/>

      {<h5>Favorite Movies: {favorites}</h5>}
      {<h5>Total Price of Favorites: {price}</h5>}
        </div>
        <div className="wrapper_bakery_item">
          {sortAndFilteredData.map((item, index) => (
            <BakeryItem movie={item} index={index} setFavorites={setFavorites} favorites={favorites} priceSetter={setPrice} favoritesPrice={price}/> // replace with BakeryItem component
            // TODO: map bakeryData to BakeryItem components
          ))}
        </div> 
      </div>
      <div>
        <h2>Favorites</h2>
        {//show only if asked for favorites
        bakeryData.map((item, index) => (
            <FavItem movie={item} index={index} setFavorites={setFavorites} favorites={favorites}
            priceSetter={setPrice} favoritesPrice={price}/> // replace with BakeryItem component
            // TODO: map bakeryData to BakeryItem components
          ))}
      </div>
      
    </div>
  );
}

export default App;
