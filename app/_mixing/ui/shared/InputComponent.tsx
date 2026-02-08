import clsx from "clsx";

function InputComponent({ label,placeholder, id, type ,className}: { label: string;placeholder: string; id: string; type: string,className?:string }) {

    const Tag = type === 'textarea' ? 'textarea' : 'input';
    
    return (
        <div className={clsx("flex flex-col gap-3 ",className)}>
      <label
        htmlFor={id}
        className="font-semibold "
        >
        {label}
      </label>

      <Tag
        id={id}
        name={id}
        className={clsx(type === 'textarea' ?"":"h-6" ,"bg-black08 w-full border border-[#99999922] rounded px-3 py-6   focus:outline-none focus:ring-2 focus:ring-[#99999943]")}
        placeholder={placeholder}
        rows={type === 'textarea' ? 4 : undefined}
        />
    </div>
  );
}

export default InputComponent