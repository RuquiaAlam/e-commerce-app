import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addCartItems, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button onClick={() => addCartItems(id)} className="addToCartBttn">
        Add To Cart{cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  );
};

export default Product;
