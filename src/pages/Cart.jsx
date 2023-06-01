import { useContext } from "react";
import { products } from "../constants";
import { ShopContext } from "../context/shop-context";
import CartItems from "../components/home/card/CartItems";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto pt-[50px]">
      <div>
        <h1 className=" text-3xl font-[500] text-mainColor text-center pb-[50px]">
          Your Cart Items
        </h1>
      </div>
      <div className="flex flex-col gap-8" key={products.id}>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="flex flex-col items-end gap-8 pt-10 ">
          <p className="font-bold text-xl mr-[200px]">
            Subtotal:${totalAmount}{" "}
          </p>
          <div className="text-[16px] ">
            <button
              className="bg-slate-800 text-white p-3 rounded-[20px] mr-10"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button className="bg-slate-800 text-white p-3 rounded-[20px] mr-10">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl">Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
