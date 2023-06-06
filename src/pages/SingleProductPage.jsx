import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants";
import { ShopContext } from "../context/shop-context";

const SingleProductPage = () => {
  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");

  const {
    addToCart,
    cartItems,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ShopContext);

  useEffect(() => {
    const productData = products.filter((product) => product.title === title);

    setBodyData(productData[0]);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-slate-50">
        <img src={bodyData.image} alt="" />
      </div>
      <div className="text-[rgb(250,179,17)] text-[20px]">
        {bodyData.rating}
      </div>
      <div>
        <h3 className="text-[18px]">{bodyData.title}</h3>
      </div>
      <div className="flex justify-between items-center font-[500] text-[15px] border-t border-inherit pt-3">
        <p className="text-mainColor font-[500] text-[15px] line-through">
          ${bodyData.originalPrice}
        </p>
        <p className="text-ashColor">${bodyData.discountedPrice}</p>
        <div className="text-[14px] font-[400] p-2 rounded-lg flex justify-between items-center gap-2 text-[18px]">
          <button className="m-2" onClick={() => addToCart(id)}>
            +
          </button>
          <input
            value={cartItems[bodyData.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), bodyData.id)
            }
            className="text-center border w-[40px] bg-slate-200 py-2"
          />

          <button className="m-2" onClick={() => removeFromCart(bodyData.id)}>
            ━
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
