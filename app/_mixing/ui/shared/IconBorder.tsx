import clsx from "clsx"

function IconBorder({src,className}:{src:string,className?:string}) {
    return (
        <div className={clsx("bg-[#1A1A1A] p-3 rounded-[8px] border border-border",className)}>
            <img src={src} width={24}  />
        </div>
    )
}

export default IconBorder
