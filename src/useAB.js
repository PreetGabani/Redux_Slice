import { useEffect } from "react"

const useAB = (count) => {
    useEffect(()=>{
        if(count>0){
            document.title=`${count}`
        }
    },[count])
}

export default useAB
