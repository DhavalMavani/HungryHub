import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestaurantDetails from "../RestaurantDetails";
import Header from "../Header";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Update cart", async () => {
  const restaurantDetails = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantDetails />
      </Provider>
    </StaticRouter>
  );
  

  await waitFor(() => {
    expect(restaurantDetails.getAllByTestId("menu-addItemBtn"));
  });


  const menuBtn = restaurantDetails.getAllByTestId("menu-addItemBtn");
  fireEvent.click(menuBtn[0]);


  const cartItems = restaurantDetails.getByTestId("cart-items");
  expect(cartItems.innerHTML).toBe("Cart 1");
});
