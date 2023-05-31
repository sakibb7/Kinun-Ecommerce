import { shop1, saleWhite } from "../../../assets";

const BuyNowCard = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-2 flex justify-between items-start"
      style={{ backgroundImage: `url(${shop1})` }}
    >
      <div className="m-5 border border-ashColor p-5 flex justify-between items-start gap-10">
        <div className=" flex flex-col gap-5">
          <p className="text-mainColor">GET 30% OFF</p>
          <h2 className="text-white text-[24px] w-[350px] font-[500]">
            Be together in the moment with Barnix calling
          </h2>
          <p className="font-[400] text-white">
            SHOP NOW <span className="text-[25px] px-[5px]">→</span>
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-between items-center">
            <div
              style={{ backgroundImage: `url(${saleWhite})` }}
              className="flex flex-col justify-between items-center bg-no-repeat bg-center p-[30px]"
            >
              <p className="text-[22px] font-[500] text-white">SALE</p>
              <p className="text-white">
                <span className="text-mainColor">30</span>% OFF
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowCard;
