import MultiImgCardComponent from "../_mixing/components/MultiImgCardComponent"

function ListComponents({top=false}:{top?:boolean}) {
    if(top){
        //later
    }
    return (
        <div className="flex overflow-x-auto space-x-4 mt-10">
            <MultiImgCardComponent  genre={{"id":28,"name":"Action"}} />
            <MultiImgCardComponent  genre={{"id":28,"name":"Action"}} />
            <MultiImgCardComponent  genre={{"id":28,"name":"Action"}} />
        </div>
    )
}

export default ListComponents
