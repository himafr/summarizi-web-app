import { useEffect, useRef, useState } from "react";
import { PlanTypes } from "../../_@types/types";
import clsx from "clsx";

const plansName = ['Basic', 'Standard', 'Premium'];
  const plans: PlanTypes[] = [
    {
      name: "Basic",
      price: "$9.99/Month",
      content:
        "Access to a wide selection of movies and shows, including some new releases.",
      devices: "Watch on one device simultaneously",
      trial: "7 Days",
      cancel: "Yes",
      hdr: "No",
      dolby: "No",
      ads: "No",
      offline: "No",
      family: "No",
    },
    {
      name: "Standard",
      highlight: true,
      price: "$12.99/Month",
      content:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      devices: "Watch on Two devices simultaneously",
      trial: "7 Days",
      cancel: "Yes",
      hdr: "Yes",
      dolby: "Yes",
      ads: "Yes",
      offline: "Yes, for select titles.",
      family: "Yes, up to 5 family members.",
    },
    {
      name: "Premium",
      price: "$14.99/Month",
      content:
        "Access to the widest selection of movies and shows, including all new releases and Offline Viewing",
      devices: "Watch on Four devices simultaneously",
      trial: "7 Days",
      cancel: "Yes",
      hdr: "Yes",
      dolby: "Yes",
      ads: "Yes",
      offline: "Yes, for all titles.",
      family: "Yes, up to 6 family members.",
    },
  ];

  const features = [
    "Price",
    "Content",
    "Devices",
    "Free Trial",
    "Cancel Anytime",
    "HDR",
    "Dolby Atmos",
    "Ad-Free",
    "Offline Viewing",
    "Family Sharing",
  ];

  const featureMap: Record<string, keyof PlanTypes> = {
    Price: "price",
    Content: "content",
    Devices: "devices",
    "Free Trial": "trial",
    "Cancel Anytime": "cancel",
    HDR: "hdr",
    "Dolby Atmos": "dolby",
    "Ad-Free": "ads",
    "Offline Viewing": "offline",
    "Family Sharing": "family",
  };
export default function PricingTablePhone() {
  const [currentPlan, setCurrentPlan] = useState<number>(1);



   const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-index]');
      if (target) {
        const index = Number(target.getAttribute('data-index'));
        setCurrentPlan(index);
      }
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, []);
  return (
    <div>
      <div 
       ref={containerRef}
      className="bg-black06 flex justify-around mt-9  mb-5 p-2 rounded-xl"> 

      {plansName.map((label, idx) => (
        <div
          key={label}
          data-index={idx}
          className={clsx(
            'py-3 px-5 cursor-pointer rounded',
            currentPlan === idx ? '!bg-black12 text-white' : '!bg-black06 text-gray-400'
          )}
        >
          {label}
        </div>
      ))}      </div>
      <div className=" mb-8 rounded-2xl border border-[#99999934]">
        <table className="min-w-full overflow-hidden rounded-2xl border-2 border-[#99999934]">
          <thead className="rounded-tl-2xl">
            <tr className="rounded-tl-2xl">
              <th className="p-6 font-semibold  bg-black06 border border-[#99999934]">
                Features
              </th>
              {
                <th
                  key={plans[currentPlan].name}
                  className={`p-6 font-semibold border border-[#99999934] bg-black06`}
                >
                  {plans[currentPlan].name}
                  {plans[currentPlan].highlight && (
                    <span className="ml-2 px-2 py-0.5 text-sm bg-primary  rounded-full">
                      Popular
                    </span>
                  )}
                </th>
              }
            </tr>
          </thead>
          <tbody className="text-subtitle">
            {features.map((feature) => (
              <tr key={feature} className="border-t">
                <td className="p-6 border border-[#99999934] font-medium">
                  {feature}
                </td>
                {
                  <td
                    key={plans[currentPlan].name + feature}
                    className="p-6 border border-[#99999934] align-top"
                  >
                    {plans[currentPlan][featureMap[feature]]}
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
