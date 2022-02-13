import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,IncBy,DecBy } from './createSlice'

const Home = () => {

    const counter = useSelector((state)=>state.counter.counter)
    const dispatch = useDispatch()

    return (
        <>
            <div className="text-center mt-5">
                <h1>
                    {counter}
                </h1>
            </div>
            <div className="text-center mt-2">
                <button className="btn btn-outline-dark" 
                onClick={()=>dispatch(increment())}
                >Increment</button>
                <button className="btn btn-outline-dark m-lg-2" 
                onClick={()=>dispatch(decrement())}
                >Decrement</button>
                <button className="btn btn-outline-dark m-lg-2" 
                onClick={()=>dispatch(IncBy())}
                >Inc By 100</button>
                <button className="btn btn-outline-dark m-lg-2" 
                onClick={()=>dispatch(DecBy())}
                >Dec By 100</button>
            </div>
        </>
    )
}

export default Home
