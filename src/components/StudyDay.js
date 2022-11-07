import { useState,useEffect } from "react"
import $ from 'jquery';

function StudyDay({callBack}){
    const [day,setDays]=useState(null)
    const [type,setType]=useState(null)
    const onSubmit2=(event)=>{
        event.preventDefault()
        const day=Number($('#value2').val())
        if(1>day || day>7){
          alert('1~7 사이의 값을 입력해 주세요')
          return 
        }
        setDays(day)
        setType('StudyDay')
      }
      useEffect(()=>{
        callBack(day,type)
      })
    return (
        <div>
        <h4>일주일 기준 몇일 나올건지</h4>
        <form onSubmit={onSubmit2}>
            <input placeholder='1~7사이의 값 입력해주세요' id="value2" type="text" />
            <input type="submit" value="확인"/>
        </form>
        </div>
    )
}

export {StudyDay}