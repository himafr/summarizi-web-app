import clsx from "clsx"

function BadgeComponent({className,children}:{className?:string,children:React.ReactNode}) {
    return (
        <div className={clsx("p-2.5 rounded-[6px] bg-black08 border border-border ",className)}>
            {children}
        </div>
    )
}

export default BadgeComponent
