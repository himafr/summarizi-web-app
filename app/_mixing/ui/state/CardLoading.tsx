const CardLoading : React.FC =()=> {
    return (
 <div className="w-[90px] md:w-[295.4px] md:p-[30px] p-1.5 py-3 bg-[#1A1A1A] md:min-w-[295px] min-w-[115px] rounded-[10px] border border-border animate-pulse">
      <div className="grid gap-1.5 grid-cols-2  bg-linear-to-t relative animate-pulse ">
      <div
          className=" bg-gray-500 "
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] pointer-events-none"></div>
      </div>
      <div className="flex justify-around relative top-2 items-center">
        <p className="text-[18px] font-semibold animate-pulse bg-gray-500/50 w-20 h-4 mt-1.5" > </p>
        <p className="text-[18px] font-semibold animate-pulse bg-gray-500/50 w-20 h-4 mt-1.5" > </p>
      </div>
    </div>
    )
}

export default CardLoading

