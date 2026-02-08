const CardsLoading : React.FC =()=> {
    return (
 <div className="w-[295.4px] p-[30px] bg-[#1A1A1A] min-w-[295px] border border-border rounded-[10px]">
      <div className="grid gap-1.5 grid-cols-2  bg-linear-to-t relative animate-pulse ">
        {[...Array(4)].map((_,index)=><div
        key={index}
          className="w-[115.2px] h-[123.5px] bg-gray-500 "
        />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] pointer-events-none"></div>
      </div>
      <div className="flex justify-between relative top-2 items-center">
        <p className="text-[18px] font-semibold animate-pulse bg-gray-500/50 w-20 h-4 mt-1.5" > </p>
      </div>
    </div>
    )
}

export default CardsLoading

