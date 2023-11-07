import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";





function RestaurantDetails() {
  const { resId } = useParams();
  const restaurant = useRestaurantDetails(resId);

  const dispatch = useDispatch();
  const handleAddItem= (foodItem)=>{
    dispatch(addItem(foodItem))
  }

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-2/3 p-4">
        <h1 className="text-2xl font-bold mb-4">
          {"Restaurant Name: " + restaurant.data?.cards[0]?.card?.card?.info?.name}
        </h1>
        <img
          className="h-96 w-full object-cover rounded-lg shadow-lg mb-4"
          src={IMG_CDN_URL + restaurant.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <h3 className="text-lg font-bold mb-2">{"Restaurant ID: " + resId}</h3>
        <h3 className="text-lg font-bold mb-2">{"Restaurant Area: " + restaurant.data?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3 className="text-lg font-bold mb-2">{"Restaurant City: " + restaurant.data?.cards[0]?.card?.card?.info?.city}</h3>
        <h3 className="text-lg font-bold mb-2">{"Restaurant Rating: " + restaurant.data?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <h3 className="text-lg font-bold mb-2">{"Cost for two: " + restaurant.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
        <h3 className="text-lg font-bold mb-2">{"Cuisines: " + restaurant.data?.cards[0]?.card?.card?.info?.cuisines}</h3>
      </div>

      <div className="md:w-1/3 p-4">
        <h1 className="text-2xl font-bold mb-4">Menu</h1>
        
        <ul data-testid="menu">
          {restaurant.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((restaurantMenu) => {
            return (  <li key={restaurantMenu.card.info.id}>
                {restaurantMenu.card.info.name}
                <button data-testid="menu-addItemBtn" className=" px-1 m-1 bg-orange-200" onClick={()=> {
                  handleAddItem(restaurantMenu.card.info) 
                  {console.log(restaurantMenu.card.info)}
                  }}>Add Item</button>
                
              </li> )
          })}
          
        </ul>
      </div>
      {/* {console.log(restaurant.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card.itemCards)} */}
    </div>
  );
}

export default RestaurantDetails;




// function RestaurantDetails() {

//   const { resId } = useParams();
//   const restaurant = useRestaurantDetails(resId);
  
//   return ( (!restaurant) ? <Shimmer /> : 

//     <div className="menu flex">

//       <div className="p-2 pl-4">
//         <h1 className="text-2xl pb-2">{"Restaurant Name: " + restaurant.data?.cards[0]?.card?.card?.info?.name}</h1>
//         <img
//           className="h-56"
//           src={IMG_CDN_URL + restaurant.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}>
//         </img>
//         <h3>{"Restaurant ID: " + resId}</h3>
//         <h3>{"Restaurant Area: " + restaurant.data?.cards[0]?.card?.card?.info?.areaName}</h3>
//         <h3>{"Restaurant City: " + restaurant.data?.cards[0]?.card?.card?.info?.city}</h3>
//         <h3>{"Restaurant Rating: " + restaurant.data?.cards[0]?.card?.card?.info?.avgRating}</h3> 
//         <h3>{"Cost for two: " + restaurant.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3> 
//         <h3>{"Cuisines: " + restaurant.data?.cards[0]?.card?.card?.info?.cuisines}</h3> 
//       </div>

//       <div className="p-2 px-4">
//         <h1 className="text-2xl">Menu</h1>
//             <ul className="pt-2">
//             { 
//               restaurant.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((restaurantMenu)=>{
//                 return <li key={restaurantMenu.card.info.id}>{restaurantMenu.card.info.name}</li>
//               })
//             }
//             </ul>
//       </div>

  
//       {/* {console.log(restaurant.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card.itemCards)} */}
//     </div>
    
//   );
// }