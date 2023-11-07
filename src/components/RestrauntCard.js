import { IMG_CDN_URL } from "../config";



const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
  return (
    <div className="card w-[230px] p-2 m-2 bg-orange-50 shadow-sm rounded">
      <img
        className="rounded object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="mt-2">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="text-gray-500">{cuisines.join(", ")}</h3>
        <h4 className="text-gray-500">{lastMileTravelString} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;





