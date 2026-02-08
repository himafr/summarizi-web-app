import { useQuery } from "@tanstack/react-query"
import { getPersonById } from "../../services/peopleApi"
import { PersonDetails } from "../../../_@types/types"

export function usePersonById(id:string|undefined){

    const {data,isLoading,error}=useQuery<PersonDetails>({
        queryKey:["personById",id],
        queryFn:()=>getPersonById(id)
    })
    return {person:data,isLoading,error}
}
