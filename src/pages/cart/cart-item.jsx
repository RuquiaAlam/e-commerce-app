import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {
    cartItems,
    addCartItems,
    removeFromCart,
    updateCartItemsCount
 
  } = useContext(ShopContext);


  return (
    <div className="cartItem">
      <img src={productImage} alt="img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemsCount(e.target.value, id)}
          />
          <button onClick={() => addCartItems(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
