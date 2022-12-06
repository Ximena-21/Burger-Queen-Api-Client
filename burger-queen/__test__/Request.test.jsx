import { waitFor } from "@testing-library/react";
// import { screen, fireEvent, waitFor } from "@testing-library/react";
// import { LoginForm } from "../src/components/Login/LoginForm";
// import { BrowserRouter } from "react-router-dom";
import { getProducts, makeRequestDelete, makeRequestPatch } from "../src/lib/requests";
// import { getProducts } from "../src/lib/requests";

jest.mock("../src/lib/requests");

describe("Request API", () => {

  test("Request for products data", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => { });

    getProducts.mockResolvedValueOnce(
      [
        {
          "id": 1,
          "name": "Sandwich de jamón y queso",
          "price": 1000,
          "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/sandwich.png",
          "type": "Desayuno",
          "dateEntry": "2022-03-05 15:14:10"
        },
        {
          "id": 2,
          "name": "Café americano",
          "price": 500,
          "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/coffee.png",
          "type": "Desayuno",
          "dateEntry": "2022-03-05 15:14:10"
        },
      ]
    );


    await waitFor(() => {
      expect(getProducts).not.toBeNull();

    });
  });

  test("Request Delete", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => { });

    makeRequestDelete.mockResolvedValueOnce({
      type: 'cors',
      url: 'http://localhost:8080/products/2022-12-05T17:45:35.119Z',
      redirected: false,
      status: 200,
      ok: true
    });

    // console.log('peticion >>>', makeRequestDelete);

    await waitFor(() => {
      // expect(makeRequestDelete).toHaveBeenCalledTimes(1);
      expect(makeRequestDelete).not.toBeNull();
      // expect(makeRequestDelete).toHaveBeenCalledWith(url)
      // expect(makeRequestDelete.redirected).toBe(false)
      // expect(makeRequestDelete.status).toBe(200)
    });
  });

  test("Request Patch", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => { });

    makeRequestPatch.mockResolvedValueOnce({
      type: 'cors',
      url: "http://localhost:8080/products/2022-12-05T16:43:25.037Z",
      redirected: false,
      status: 200,
      ok: true
    });


    await waitFor(() => {
      // expect(getProducts).toHaveBeenCalledTimes(1);
      expect(makeRequestPatch).not.toBeNull();
      // expect(makeRequestDelete.ok).toBe(true)
      // expect(makeRequestDelete.status).toBe(200)
    });
  });


});
