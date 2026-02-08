import { PlanTypes } from "../_@types/types";
import PrimaryButton from "../_mixing/ui/shared/PrimaryButton";

const PlanCard = ({content,price,time,name}:PlanTypes) => {
  return (
    // <div className="w-full max-w-sm p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-[#1e1e1e]  rounded-xl p-6 flex flex-col gap-4 max-w-[600px] border border-border">
       
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-base text-subtitle leading-relaxed">
         {content}
        </p>
        <div className="flex items-end">

        <p className="text-3xl font-bold">${price}</p><p className="text-subtitle text-sm">/{time} </p> 
        </div>
        <div className="flex gap-3 pt-4 text-sm">
          <button className=" px-4 py-2 bg-dark  rounded-md hover:bg-black  transition border border-border">
            Start Free Trial
          </button>
        <PrimaryButton title="Choose Plan" />
        </div>
      </div>
  );
};

export default PlanCard;
