import BuyNowCard from "./card/BuyNowCard";

const Coupon = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-10 pb-10">
      <BuyNowCard />
      <BuyNowCard />
    </div>
  );
};

export default Coupon;
