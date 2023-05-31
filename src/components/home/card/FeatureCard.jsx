import { BsTruck } from "react-icons/bs";

const FeatureCard = ({ featureTitle, featureDetail }) => {
  return (
    <div className="border border-slate-300 py-5">
      <div className="flex justify-center items-center">
        <BsTruck size="35px" />
        <div className="pl-[20px]">
          <p className="font-[500] pb-2">{featureTitle}</p>
          <p className="text-ashColor">{featureDetail}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
