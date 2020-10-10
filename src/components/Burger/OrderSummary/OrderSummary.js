import React from "react";

import Aux from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientkey) => {
      return (
        <li key={ingredientkey}>
          <span style={{ textTransform: "capitalize" }}>{ingredientkey}</span> :
          {props.ingredients[ingredientkey]}
        </li>
      );
    }
  );

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger eith the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
