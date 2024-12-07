import { createContext, useEffect, useState } from "react";
import getTalents from "../services/api/getTalents";

export interface ITalentsContext{
    talents:any[]

}

export const TalentsContext = createContext<ITalentsContext | null>(null)

const TalentsProvider = (props) =>{
    const {children} = props
    const [talents, setTalents] = useState()

    useEffect(()=>{
        getTalents().then(talents=>{
            setTalents(talents)
        })
    },[])

    return <TalentsProvider value={{talents}}>
        {children}
    </TalentsProvider>
}

export default TalentsProvider
