import { DeviceTypes } from "../../../_@types/types";

const DeviceSupportCard = ({description,icon,name}:DeviceTypes) => {
  return (
    <div className="bg-gradient-to-tr from-80% from-[#1e1e1e]  to-[#1db95422] p-10 rounded-xl shadow-md w-full max-w-lg flex flex-col gap-4 border border-border">
      <div className="flex items-center gap-3">
        <div className="bg-dark p-3 rounded-[10px]">
            <img width={30} height={30} src={icon} /> 
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">
        {description}
      </p>
     
    </div>
  );
};

export default DeviceSupportCard;
