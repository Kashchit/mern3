import { useEffect , useState } from "react"

function LearningUseEffect(){
    //--first type of array -- 

    const [count, setCount] = useState(0)

    const increaseCount = () =>{
        setCount(count + 1)
    }
    const decreaseCount = () =>{
        setCount(count - 1)
    }

    useEffect(()=>{
        console.log('kashchit is using useEffect')
    },[count])

    useEffect(()=>{
        console.log("third type of useEfect this will get executed everytime")
    })
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        </>
    )
}

export default LearningUseEffect