import React from "react";

export default function PizzaOrder(props) {
  const { values, change, submit, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <p>{errors.username}</p>
      <label>
        Name
        <input
          type="text"
          name="username"
          placeholder="Enter Name Here"
          id="name-input"
          value={values.username}
          onChange={onChange}
        />
      </label>
      <p>{errors.size}</p>
      <label>
        Size
        <select
          id="size-dropdown"
          name="size"
          value={values.size}
          onChange={onChange}
        >
          <option value="">---Select a Size---</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      Toppings:&nbsp;
      <label>
        Pepperoni
        <input
          checked={values.topping1}
          type="checkbox"
          name="topping1"
          onChange={onChange}
        />
      </label>
      <label>
        Sausage
        <input
          checked={values.topping2}
          type="checkbox"
          name="topping2"
          onChange={onChange}
        />
      </label>
      <label>
        Peppers
        <input
          checked={values.topping3}
          type="checkbox"
          name="topping3"
          onChange={onChange}
        />
      </label>
      <label>
        Mushrooms
        <input
          checked={values.topping4}
          type="checkbox"
          name="topping4"
          onChange={onChange}
        />
      </label>
      <label>
        Special Instructions
        <input
          type="text"
          placeholder="Put any instruction you have here"
          value={values.instructions}
          name="instructions"
          onChange={onChange}
          id="special-text"
        />
      </label>
      <button id="order-button" disabled={disabled}>
        Submit
      </button>
    </form>
  );
}
