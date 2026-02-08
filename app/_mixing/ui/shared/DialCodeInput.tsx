import { useEffect, useState } from 'react';
import CountryList from 'country-list-with-dial-code-and-flag';
import clsx from 'clsx';

export default function DialCodeInput({ label, id ,className}: { label: string;placeholder: string; id: string; className?:string }) {
  const [input, setInput] = useState('+');
  const [matchedCountry, setMatchedCountry] = useState<{
    name: string;
    dialCode: string;
    flag: string;
  } | null>(null);

  useEffect(() => {
    const match = CountryList.getAll().find((country) =>
      input.startsWith(country.dialCode)
    );
    setMatchedCountry(match ?? null);
  }, [input]);

  return (
       <div className={clsx("flex flex-col gap-3 ",className)}>
            <label
              htmlFor={id}
              className="font-semibold "
              >
              {label}
            </label>
      
      <div className='grid grid-cols-4 gap-3'>


            <input 
              id={id}
              name={id}
              className={clsx("col-span-3 h-6 bg-black08 w-full border border-[#99999922] rounded px-3 py-6   focus:outline-none focus:ring-2 focus:ring-[#99999943] ")}
              type="tel"
              placeholder="+1 555 123 4567"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              />
        {matchedCountry && (
          <div className="flex items-center text-sm gap-2 text-gray-700 whitespace-nowrap">
            <span className="text-lg">{matchedCountry.flag}</span>
            <span>{matchedCountry.name}</span>
          </div>
        )}
        </div>
          </div>
  );
}
