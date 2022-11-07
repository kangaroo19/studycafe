import {useEffect, useState} from 'react'
function Select({value,periodArr,cumArr,callBack}){
    const [fee,setFee]=useState(null)
    const [type,setType]=useState(null)

    const feeClick=(e)=>{
        e.preventDefault()
        if(e.target.value==='선택하세요'){
            alert('유효한 값을 선택해 주세요')
            return
        }
        setFee(e.target.value)
        setType('Select')
    }
    useEffect(()=>{
        callBack(fee,type)
    })
    return (
        <select onChange={feeClick}>
        {(value==='기간권')
        ?
        periodArr.map((v,i)=>(
          <option  value={v} key={i}>{v}</option>
        ))
        :
        cumArr.map((v,i)=>(
          <option value={v} key={i}>{v}</option>
        ))
        }
      </select>
    )
}

export {Select}