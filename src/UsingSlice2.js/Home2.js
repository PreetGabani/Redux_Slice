import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addData} from './createSlice2'

const Home = () => {

    const [name,setName] = useState("")

    // const data = useSelector((state)=>state.add.addData)
    const dispatch = useDispatch()

    return (
        <>
                <div className="text-center mt-2">
                    <input placeholder="Enter Name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <button type="submit" onClick={()=>{
                        dispatch(addData(name))
                    }}>Submit</button>
                </div>
        </>
    )
}

export default Home
