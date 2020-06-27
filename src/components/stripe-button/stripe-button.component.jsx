import React from "react";
import StripeCheckout from "react-stripe-checkout";

import CustomButton from "../custom-button/custom-button.component";

const Paynow = ({ total }) => {
  const priceForStripe = total * 100;
  const publishableKey =
    "pk_test_51Gw3jiEnwVW1SW8rR9VYXHPlv1tWEgIjN4mmhfNuFCxmgJAzneWbogpRPKClwx7DNs07t0leALf7HLkshykGHjvs00LXsl7q3Q";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${total}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <div className="checkout-btn">
        <CustomButton>Pay Now</CustomButton>
      </div>
    </StripeCheckout>
  );
};
export default Paynow;
