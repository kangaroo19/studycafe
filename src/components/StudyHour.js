import { useEffect, useState } from "react"
import $ from 'jquery';

function StudyHour({value,callBack}){
    const [hours,setHours]=useState(null)
    const [type,setType]=useState(null) //어떤 자식컴포넌트에서 부모 컴포넌트로 보냈는지 판별 위한 식별자
    const onSubmit1=(event)=>{
        event.preventDefault()
        const time=Number($('#value1').val())
        if(1>time || time>12){
          alert('1~12 사이의 값을 입력해 주세요')
          return
        }
        setHours(time)
        setType('StudyHour')
      }
      useEffect(()=>{ //value값 바뀌면 input 초기화
        $('#value1').val('')
      },[value])
      useEffect(()=>{ //부모컴포넌트로 값 보냄
        callBack(hours,type)
      }) 
    return (
        <div>
            <h4 style={{fontWeight:'900'}}>하루에 공부할 시간</h4>
            <form onSubmit={onSubmit1}>
                <input placeholder='1~12사이의 값 입력해주세요' id="value1" type="text" />
                <input type="submit" value="확인"/>
            </form>
        </div>
    )
}

export {StudyHour}