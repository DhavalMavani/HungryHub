import { useState, useEffect } from 'react'
function useRestaurantList() {

  const [allRestaurants, setAllRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);


  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2964051&lng=70.79415639999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    // console.log(jsondata);
    
    setAllRestaurants(jsondata?.data?.cards[2]?.data?.data?.cards);
  }
  return allRestaurants
}

export default useRestaurantList