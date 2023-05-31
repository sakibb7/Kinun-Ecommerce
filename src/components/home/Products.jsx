import { products } from "../../constants";

const Products = () => {
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
                  {originalPrice}
                </p>
                <p className="text-ashColor">{discountedPrice}</p>
                <div className="text-[20px] font-[400] flex justify-center items-center gap-2">
                  <span>╶╴</span>
                  <span className="bg-slate-200 px-3 py-1">0</span>
                  <span>+</span>
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
