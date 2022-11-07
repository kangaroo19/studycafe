import { useEffect, useState } from "react"
import $ from 'jquery';

function StudyHour({callBack}){
    const [hours,setHours]=useState(null)
    const [type,setType]=useState(null)
    const onSubmit1=(event)=>{
        event.preventDefault()
        const time=Number($('#value1').val())
        if(1>time || time>24){
          alert('1~24 사이의 값을 입력해 주세요')
          return
        }
        setHours(time)
        setType('StudyHour')
      }
      useEffect(()=>{
        callBack(hours,type)
      }) 
    return (
        <div>
            <h4>하루에 공부할 시간</h4>
            <form onSubmit={onSubmit1}>
                <input placeholder='1~24 사이의 값 입력해주세요' id="value1" type="text" />
                <input type="submit" value="확인"/>
            </form>
        </div>
    )
}

export {StudyHour}