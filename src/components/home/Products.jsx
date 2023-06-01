import { useContext } from "react";
import { products } from "../../constants";
import { ShopContext } from "../../context/shop-context";

const Products = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[products.id];

  return (
    <div className="max-w-screen-xl mx-auto pb-16">
      <h2 className="text-2xl my-8 py-1 border-l-[3px] border-mainColor">
        <span className="font-[500] pl-[20px]">Popular</span> Products For You!
      </h2>
      <div className=" grid grid-cols-4 gap-8">
        {products.map(
          ({ id, image, title, rating, originalPrice, discountedPrice }) => (
            <div className="flex flex-col gap-2" key={id}>
              <div className="bg-slate-50">
                <img src={image} alt="" />
              </div>
              <div className="text-[rgb(250,179,17)] text-[20px]">{rating}</div>
              <div>
                <h3 className="text-[18px]">{title}</h3>
              </div>
              <div className="flex justify-between items-center font-[500] text-[15px] border-t border-inherit pt-3">
                <p className="text-mainColor font-[500] text-[15px] line-through">
                  ${originalPrice}
                </p>
                <p className="text-ashColor">${discountedPrice}</p>
                <div className="text-[14px] font-[400] bg-slate-200 p-2 rounded-lg">
                  <button onClick={() => addToCart(id)}>
                    {cartItems[id] > 0 ? (
                      <>Added to Cart({cartItems[id]})</>
                    ) : (
                      <>Add to Cart</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
