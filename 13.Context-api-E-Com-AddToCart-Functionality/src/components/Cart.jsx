import React, { useContext } from "react";
import { MyStore } from "../context/MyEcom";
import CartCard from "./CartCard";

const Cart = () => {
  const { cartItem } = useContext(MyStore);
  return (
    <div>
      {cartItem.length == 0 ? (
        <h1>Your Cart Is Empty</h1>
      ) : (
        cartItem.map((elem) => {
          return <CartCard key={elem.id} product={elem} />;
        })
      )}
    </div>
  );
};

export default Cart;
