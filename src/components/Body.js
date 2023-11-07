import RestaurantCard from "./RestrauntCard";
import { useState, useEffect, useCallback, useMemo, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import {filterData} from "../utils/helper.js"
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";
import userContext from "../utils/userContext";




const Body = () => {

  const {user, setUser} = useContext(userContext)
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  

  let allRestaurants= useRestaurantList();

useEffect(()=>{
  setFilteredRestaurants(allRestaurants);
},[allRestaurants])
  

  const isOnline=useOnline();
  // console.log(isOnline);
  if(!isOnline){
    return <h1>Offline</h1>
  }
  

  return ( (allRestaurants.length==0) ? (<Shimmer />) : (
    <>
    {/* {console.log(filteredRestaurants)} */}

      <div className="search-container bg-orange-50 px-4 py-2">
        <input
          data-testid="search-input"
          className="rounded"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button 
          data-testid="search-btn"
          className="search-btn px-2 mx-2 bg-orange-300 rounded hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-500"
          onClick={() => {
            const data= filterData(allRestaurants,searchText);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        <input
          className="search-input rounded"
          value={user.name}
          onChange={(e)=>{setUser({...user,name:e.target.value} )} }
        />


        <input
          className="search-input rounded"
          value={user.email}
          onChange={(e)=>{setUser({...user,email:e.target.value} )} }
        />
      </div>

      

      <div data-testid="restaurantListTest" className="restaurant-list flex flex-wrap">
        {

          (filteredRestaurants?.length==0) ? (<>
            <h1> No Restaurants Found </h1> <br />
            <h2> Try again</h2>
          </>) :

          
          filteredRestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}  key={restaurant.data.id} > 
              <RestaurantCard {...restaurant.data}  /> 
            </Link>
          );
        })
        
        
        }
      </div>
    </>
  ));
};

export default Body;
