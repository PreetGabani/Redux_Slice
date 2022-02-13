import React, { useState } from 'react'
import useAB from './useAB'

const Hooks = () => {

    const [count,setCount] = useState(0)
    useAB(count)

    return (
        <>
        <div className="text-center">
            <h1>{count}</h1>
            <button className="btn btn-outline-info m-lg-5" onClick={()=>{setCount(count+100)}}>Click</button>  
        </div>
        </>
    )
}

export default Hooks
