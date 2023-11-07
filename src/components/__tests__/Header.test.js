import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
        <Provider store={store}>
           <Header />
        </Provider>
    </StaticRouter>
  );
//   console.log(header);

  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");

});


test("Cart items should be zero on rendering header", () => {
  const header = render(
    <StaticRouter>
        <Provider store={store}>
           <Header />
        </Provider>
    </StaticRouter>
  );
  // console.log(header);

  const cartItems = header.getByTestId("cart-items");
//   console.log(cartItems.innerHTML);
  expect(cartItems.innerHTML).toBe("Cart 0");

});


test("Initially user should be looged out on rendering header", () => {
    const header = render(
      <StaticRouter>
          <Provider store={store}>
             <Header />
          </Provider>
      </StaticRouter>
    );
    // console.log(header);
  
    const isLoggedIn = header.getByTestId("isLoggedIn");
    // console.log(isLoggedIn.innerHTML);
    expect(isLoggedIn.innerHTML).toBe("Logged out");
  
  });
  



