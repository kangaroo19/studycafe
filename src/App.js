import './App.css';
import {useState,useEffect} from 'react'
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { Select } from './components/Select'
import { StudyHour } from './components/StudyHour';
import { StudyDay } from './components/StudyDay';
import { ResultBtn } from './components/ResultBtn';
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
  const [value, setValue] = useState(null);
  const [fee,setFee]=useState(null)
  const [hours,setHours]=useState(null)
  const [days,setDays]=useState(null)
  // const onChange = ({ target: { value } }) => {
      
  //     setValue(value);
  //   };

  
  
  
  function callBack(event,type){ //자식 컴포넌트의 데이터 부모 컴포넌트(app)로 보내기 위함
    if(type==='Select') setFee(event)
    else if(type==='StudyHour') setHours(event)
    else if(type==='StudyDay') setDays(event)
  }
  
  return (
    <div>
      
      <h4>필수입력</h4>
      <h4>사용할 요금제</h4>
      <Radio.Group
        onChange={({ target: { value } })=>setValue(value)}
        options={optionsWithDisabled}
        optionType="button"
        buttonStyle="solid"/>

      <Select 
        value={value} 
        periodArr={periodArr} 
        cumArr={cumArr}
        callBack={callBack}
        />

      <StudyHour
        callBack={callBack}
        />

      {(value==='기간권')
      ?<StudyDay callBack={callBack}
      />
      :null
      }

      <ResultBtn
        value={value}
        fee={fee}
        hours={hours}
        days={days}
      />
      
      
    </div>
  );
}

export default App;
