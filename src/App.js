import './App.css';
import {useState} from 'react'
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import $ from 'jquery';
import {Result} from './components/Result'
function App() {
  const optionsWithDisabled = [
    {
      label: '기간권',
      value: '기간권',
      defaultChecked: true,

    },
    {
      label: '정액권',
      value: '정액권',
    },
  ];
  const periodArr=['선택하세요','1주 (5만원)','2주 (8만원)','4주 (13만원)']
  const cumArr=['선택하세요','50시간 (7만원)','100시간 (12만원)']
  const timeTicket={
    oneHour:2000,
    twoHour:3000,
    fourHour:5000,
    sixHour:7000,
    eightHour:8000,
    twelveHour:10000
  }
  const periodTicket={
    oneWeek:50000,
    twoWeek:80000,
    fourWeek:130000
  }
  
  const cumTicket={
    fifthyHour:70000,
    hundredHour:120000
  }
  const [loading,setLoading]=useState(true)
  const [value, setValue] = useState(null);
  const [fee,setFee]=useState(null)
  const [hours,setHours]=useState(null)
  const [days,setDays]=useState(null)

  const onChange = ({ target: { value } }) => {
      setValue(value);
    };
  const feeClick=(event)=>{
    if(event.target.value==='선택하세요'){
      alert('유효한 값을 선택해 주세요')
      return
    }
    setFee(event.target.value)
  }
  const onSubmit1=(event)=>{
    event.preventDefault()
    const time=Number($('#value1').val())
    if(1>time || time>24){
      alert('1~24 사이의 값을 입력해 주세요')
      return
    }
    setHours(time)
  } 
  const onSubmit2=(event)=>{
    event.preventDefault()
    const day=Number($('#value2').val())
    if(1>day || day>7){
      alert('1~7 사이의 값을 입력해 주세요')
      return 
    }
    setDays(day)
  }
  const onClick=()=>{
    setLoading(false)
  }
  return (
    <div>
      <h4>필수입력</h4>

      <h4>사용할 요금제</h4>
      <Radio.Group
        onChange={onChange}
        options={optionsWithDisabled}
        optionType="button"
        buttonStyle="solid"/>
      
      
      <select onChange={feeClick}>
        {(value==='기간권')
        ?
        periodArr.map((v,i)=>(
          <option lable='123' value={v} key={i}>{v}</option>
        ))
        :
        cumArr.map((v,i)=>(
          <option value={v} key={i}>{v}</option>
        ))
        }
      </select>

      <h4>하루에 공부할 시간</h4>
      <form onSubmit={onSubmit1}>
        <input id="value1" type="text" />
        <input type="submit" value="확인"/>
      </form>
      {(value==='기간권')
      ?
      <>
      <h4>일주일 기준 몇일 나올건지</h4>
      <form onSubmit={onSubmit2}>
        <input id="value2" type="text" />
        <input type="submit" value="확인"/>

      </form>
      </>
      :
      null
      }
      <button onClick={onClick}>계산</button>
      {(loading)?null:<Result
      fee={fee}
      hours={hours}
      days={days}/>}
    </div>
  );
}

export default App;
