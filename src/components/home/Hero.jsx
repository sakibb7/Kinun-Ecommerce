import { sliderImage1, saleVector } from "../../assets";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-no-repeat bg-center bg-cover py-40"
        style={{ backgroundImage: `url(${sliderImage1})` }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center w-[550px] bg-white py-[30px] px-[40px]">
            <div className="flex flex-col gap-5">
              <p className="text-mainColor text-[20px] font-[500]">
                2022 Collection
              </p>
              <h1 className="text-[54px] font-titleFont font-[600] w-[200px] leading-[60px]">
                Furniture Collection
              </h1>
              <p className="text-[20px] font-[500]">
                Starting From{" "}
                <span className="text-mainColor text-[24px]">$560.99</span>
              </p>
              <p className="font-[500]">
                SHOP NOW <span className="text-[25px] px-[5px]">→</span>
              </p>
            </div>
            <div className="flex flex-col justify-between items-center gap-[50px]">
              <div
                style={{ backgroundImage: `url(${saleVector})` }}
                className="flex flex-col justify-between items-center bg-no-repeat bg-center p-[40px]"
              >
                <p className="text-[22px] font-[500]">SALE</p>
                <p>
                  <span className="text-mainColor">30</span>% OFF
                </p>
              </div>
              <div>
                <p className="vertical text-[30px]">
                  <span className="text-mainColor text-[34px] py-[20px]">
                    ─
                  </span>
                  New Arrival
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
