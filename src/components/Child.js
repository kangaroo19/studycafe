import {useState,useEffect} from 'react'

function Child({title,parentCallBack}){
    const [count,setCount]=useState(0)
    const a=123
    const onIncrease=()=>setCount(count+1)
    const onDecrease=()=>setCount(count-1)
    useEffect(()=>{
        parentCallBack(count,a)
    },[count])
    return (
        <div>
            <p>{title}</p>
            <button onClick={onDecrease}>-</button>
            카운트
            <button onClick={onIncrease}>+</button>
            <p>{count}</p>
        </div>
    )
}

export {Child}