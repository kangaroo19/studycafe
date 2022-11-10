import {useEffect, useState} from 'react'
import styles from './Select.module.css'
import $ from 'jquery';

function Select({value,periodArr,cumArr,callBack}){
    const select=document.querySelector('#select')
    const [fee,setFee]=useState(null)
    const [type,setType]=useState(null) //어떤 자식컴포넌트에서 부모 컴포넌트로 보냈는지 판별 위한 식별자

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
        setFee(null)
      },[value])
    
    // useEffect(()=>{
    // },[value])
    useEffect(()=>{
        callBack(fee,type)
    })
    return (
        <select defaultValue='선택하세요' id='select' className={styles.select} onChange={feeClick}>
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