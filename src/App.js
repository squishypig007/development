import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const[favorites, setFavorites] = useState([]);
  const[price, setPrice] = useState(0);
  const[favoriteSelect, setfavoriteSelect] = useState(false);

  const[displayItems, setDisplayItems] = useState(bakeryData);
  const[rRatedItems, setRRatedItems] = useState([]);
  const[type, setType] = useState("All");
  
  const[count, setCount] = useState(0);

  useEffect(()=>{
    let originalData = bakeryData;
    console.log("before", originalData);
    originalData = originalData.filter((movie)=>{
      return movie.rated==="R"
    })
    console.log("after", originalData);
    setDisplayItems(originalData);
  },[type])
  //sort based on views/popularity
  //i'm doing and filtering (intersections)
  //filter on Free/paid
  //pg-13/r filter
  //aggregator price of favorites - does not need to work w filter and sort
  return (
    <div className="App">
      <h1>Blockbuster Rentals</h1>
      <div className="outermost_columns">
        <div className="menu">
        <h3>Filters</h3>
        <br></br>
        <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Option 3
          </label>
        </div>
      </form>
        </div>
        <div className="wrapper_bakery_item">
          {/* if({favoriteSelect===true}){
            displayItems.map((item, index) => (
              <FavItem movie={item} index={index} countSetter={setCount} counter={count} setFavorites={setFavorites} favorites={favorites}
              priceSetter={setPrice} favoritesPrice={price}/> // replace with BakeryItem component
              // TODO: map bakeryData to BakeryItem components
            ))
          } */}
          else{displayItems.map((item, index) => (
            <BakeryItem movie={item} index={index} countSetter={setCount} counter={count} setFavorites={setFavorites} favorites={favorites}
            priceSetter={setPrice} favoritesPrice={price}/> // replace with BakeryItem component
            // TODO: map bakeryData to BakeryItem components
          ))}
        </div> 
      </div>

      <div>
        <h2>Cart</h2>
        {<h2>Current count: {count}</h2>}
        {<h2>Favorites: {favorites}</h2>}
        {<h2>Total Price of Favorites: {price}</h2>
        /* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
