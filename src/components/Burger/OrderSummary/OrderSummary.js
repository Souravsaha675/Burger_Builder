import React from "react";

import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCLE
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
