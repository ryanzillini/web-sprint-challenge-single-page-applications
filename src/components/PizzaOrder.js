import React, { useState } from "react";

export default function PizzaOrder(props) {
  const { values, change, submit, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checked" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <div id="pizza=form">
      <form>
        <label>
          Name
          <input
            type="text"
            name="username"
            placeholder="Enter Name Here"
            id="name-input"
            value={values.username}
            // onChange={onChange}
          />
        </label>
        <label>
          Size
          <select>
            <option value="">---Select a Size</option>
            <option value="small">Small</option>
            <option value="medium">medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          Special Instructions
          <input
            type="text"
            placeholder="Put any instruction you have here"
            value={values.instructions}
            name="instructions"
            onChange={onChange}
          />
        </label>
      </form>
    </div>
  );
}
