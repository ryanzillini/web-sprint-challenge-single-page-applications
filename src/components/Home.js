import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div id="homepage">
      <h2>Welcome to Lambda Pizzeria</h2>
      <nav>
        <Link id="order-pizza" to="pizza">
          Order Pizza
        </Link>
      </nav>
      <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"></img>
    </div>
  );
}
