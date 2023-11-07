export function filterData(allRestaurantsParam, searchTextParam){
    return allRestaurantsParam.filter((res) => {
      return res.data.name.toLowerCase().includes(searchTextParam.toLowerCase());
    })
  }



// import { useCallback } from "react";

// const filterData = useCallback((allRestaurantsParam, searchTextParam) => {
//   return allRestaurantsParam.filter((res) => {
//     return res.data.name.toLowerCase().includes(searchTextParam.toLowerCase());
//   });
// }, []);

export default filterData;
