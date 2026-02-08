import clsx from "clsx"
import { ReactNode } from "react"

interface PrimaryButtonType{
    title:string,
    onClick?:()=>void,
    icon?:ReactNode,
    className?:string,
}
function PrimaryButton({onClick,title,icon,className}:PrimaryButtonType) {
    return (
       <button onClick={onClick} className={clsx("flex gap-2 px-4 py-2 bg-primary  rounded-md hover:bg-green-500 transition ",className)}>
        {icon}
            {title}
          </button>
    )
}

export default PrimaryButton
