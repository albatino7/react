import React, { useContext } from "react";
import { MyStore } from "../context/MyStore";
import CartItems from "../components/CartItems";

const Cart = () => {
  const { cartProduct } = useContext(MyStore);
  return (
    <>
      {cartProduct.map((elem) => {
        return <CartItems key={elem.id} item={elem} />;
      })}
    </>
  );
};

export default Cart;
