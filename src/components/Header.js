import React, { useContext } from "react";
import { useState } from "react";
import Logo from "../assets/img/pngegg.png"
import {Link} from "react-router-dom"
import userContext from "../utils/userContext"
import {useSelector} from "react-redux"

 


export function Title() {
  return (
    <a href="/">
      <img
        data-testid="logo"
        className="h-20 p-2"
        alt="logo"
        src={Logo}
      />
    </a>
  );
}


// Composing Comopnentss
const Header = () => {

  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  const { user } = useContext(userContext);
  const cartItems = useSelector(store=> store.cart.items) 

  return (
    <div className="flex justify-between items-center bg-orange-50 p-2">
      <div className="flex items-center">
        <Title />
        <div className="nav-items ml-8">
          <ul className="flex items-center h-full">
            <li className="px-2">
              <Link to={"/"} className="text-lg font-medium hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="px-2">
              <Link to={"/about"} className="text-lg font-medium hover:text-gray-700">
                About
              </Link>
            </li>
            <li className="px-2">
              <Link to={"/contact"} className="text-lg font-medium hover:text-gray-700">
                Contact
              </Link>
            </li>
            <li className="px-2">
              <Link to={"/instamart"} className="text-lg font-medium hover:text-gray-700">
                Instamart
              </Link>
            </li>
            <li className="px-2">
              <Link data-testid="cart-items" to={"/cart"} className="text-lg font-medium hover:text-gray-700">
                Cart {cartItems.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center">
      {isUserLoggedIn ? (<h1 className="text-lg font-medium mr-4">{user.name}</h1>) : (<h1 data-testid="isLoggedIn" className="text-lg font-medium mr-4">Logged out</h1>) }

        {isUserLoggedIn ? (
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setisUserLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setisUserLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
















// // Composing Comopnentss
// const Header = () => {
//   const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
//   const { user } = useContext(userContext);

//   return (
//     <div className="flex p-2 justify-between bg-orange-50">
//       <Title />
//       <div className="nav-items">
//         <ul className="flex items-center h-full">
//           <li className="px-2"> <Link to={"/"}> Home </Link> </li>
//           <li className="px-2"> <Link to={"/about"}> About </Link></li>
//           <li className="px-2"> <a href="/about">About</a></li>
//           <li className="px-2"> <Link to={"/contact"}> Contact </Link></li>
//           <li className="px-2">Cart</li>
//           <li className="px-2"> <Link to={"/instamart"}> Instamart </Link></li>
//         </ul>
//       </div>

//       <h1 className="flex items-center">{user.name}</h1>

//       {isUserLoggedIn ? (
//         <button
//           onClick={() => {
//             setisUserLoggedIn(false);
//           }}
//         >
//           Logout
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             setisUserLoggedIn(true);
//           }}
//         >
//           Login
//         </button>
//       )}
//     </div>
//   );
// };

