import FeatureCard from "./card/FeatureCard";

const Feature = () => {
  return (
    <div className="grid grid-cols-4 py-[50px] max-w-screen-xl mx-auto">
      <FeatureCard
        featureTitle="Free Shipping"
        featureDetail="Free shipping over $100"
      />
      <FeatureCard
        featureTitle="Payment Secure"
        featureDetail="Got 100% Payment Safe"
      />
      <FeatureCard
        featureTitle="Support 24/7"
        featureDetail="Top quialty 24/7 Support"
      />
      <FeatureCard
        featureTitle="100% Money Back"
        featureDetail="Cutomers Money Backs"
      />
    </div>
  );
};

export default Feature;
