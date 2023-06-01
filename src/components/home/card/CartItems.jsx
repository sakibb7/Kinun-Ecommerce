import { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";

const CartItems = (props) => {
  const { id, image, title, rating, discountedPrice } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center border-b border-t px-20 gap-20">
      <img src={image} alt="" />
      <div className="flex justify-center items-center gap-20 text-xl">
        <p>
          <b>{title}</b>
        </p>
        <p className="text-mainColor">
          <b>${discountedPrice}</b>
        </p>
      </div>

      <div className="flex justify-center text-[14px] gap-4">
        <button
          className="border p-[5px] bg-slate-500 text-white rounded-xl px-[10px]"
          onClick={() => addToCart(id)}
        >
          Add
        </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          className="items-center w-[30px] border p-[10px]"
        />
        <button
          className="border p-[5px] bg-slate-500 text-white rounded-xl px-[10px]"
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItems;
