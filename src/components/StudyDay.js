import { useState,useEffect } from "react"
import $ from 'jquery';

function StudyDay({value,callBack}){
    const [day,setDays]=useState(null)
    const [type,setType]=useState(null) //어떤 자식컴포넌트에서 부모 컴포넌트로 보냈는지 판별 위한 식별자
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
      useEffect(()=>{ //value값 바뀌면 input 초기화
        $('#value').val('')
      },[value])
      useEffect(()=>{ //부모 컴포넌트로 값 보냄
        callBack(day,type)
      })
    return (
        <div>
        <h4 style={{fontWeight:'900'}}>일주일 기준 몇일 나올건지</h4>
        <form onSubmit={onSubmit2}>
            <input placeholder='1~7사이의 값 입력해주세요' id="value2" type="text" />
            <input type="submit" value="확인"/>
        </form>
        </div>
    )
}

export {StudyDay}