import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body"
import { RESTAURANT_DATA } from "../../mocks/data";
 
import {toBeInTheDocument} from '@testing-library/jest-dom'



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on homepage", () => {
    const body = render(
      <StaticRouter>
          <Provider store={store}>
             <Body />
          </Provider>
      </StaticRouter>
    );
    // console.log(body);
  
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(18);
  
});


test("Restaurants should load on homepage", async () => {
    const body = render(
      <StaticRouter>
          <Provider store={store}>
             <Body />
          </Provider>
      </StaticRouter>
    );
    // console.log(body);

    await waitFor(()=>{
        expect(body.getByTestId("search-btn")); 
    })

    const restaurantList = body.getByTestId("restaurantListTest");
    // console.log(restaurantList.children);
    expect(restaurantList.children.length).toBe(15)
  
});



test("Restaurants should load on homepage", async () => {
    const body = render(
      <StaticRouter>
          <Provider store={store}>
             <Body />
          </Provider>
      </StaticRouter>
    );
    // console.log(body);

    await waitFor(()=>{
        expect(body.getByTestId("search-input")); 
    })
 
    const searchInput = body.getByTestId("search-input");
    fireEvent.change(searchInput,{target:{
        value:"food",
    }})
    
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn)


    const restaurantList = body.getByTestId("restaurantListTest");
    console.log(restaurantList.children);
    expect(restaurantList.children.length).toBe(4)

  
});