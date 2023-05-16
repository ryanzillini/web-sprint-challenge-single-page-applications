import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="homepage">
      <h2>Welcome to Lambda Pizzeria</h2>
      <Link id="order-pizza" to="/pizza">
        <button>Order Pizza</button>
      </Link>
      <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"></img>
    </div>
  );
}
