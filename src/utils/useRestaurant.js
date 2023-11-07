import React, { useEffect, useState } from 'react'
import { FETCH_MENU_URL } from '../config';


function useRestaurantDetails(resId) {

  const [restaurant, setRestaurant] = useState([])

  useEffect(() => { 
    getRestaurantDetails();
    return () => {
      console.log("useEffect Return/ Component will unmount");
      };
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      FETCH_MENU_URL + resId
    );
    const jsondata = await data.json();
    // console.log(jsondata);
    setRestaurant(jsondata);
  }

  return (restaurant)
}

export default useRestaurantDetails