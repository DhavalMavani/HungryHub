import { useContext } from "react";
import userContext from "../utils/userContext";




const Footer = () => {
  const { user } = useContext(userContext);
  
  return (
    <div className="bg-orange-50 px-2 m-2 text-center">
      <h1 className="text-xl font-bold">Footer</h1>
      {user && (
        <>
          <h2 className="text-md font-medium">This site was developed by {user.name}</h2>
          <h2 className="text-md font-medium">{user.email}</h2>
        </>
      )}
    </div>
  );
};


  export default Footer;