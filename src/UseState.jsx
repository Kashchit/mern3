import { useState } from "react"

function UseState(){
    const [ count , setCount ] = useState(0)
    const increaseCount = () =>{
        setCount(count + 1)
    }
    const decreaseCount = () =>{
        setCount(count - 1)
    }

    const [ data , setData] = useState({
        name : 'kashchit',
        age : 22
    })
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <h1>{data.name}</h1>
        </>
    )
}

export default UseState;