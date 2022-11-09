import {useEffect, useState} from 'react'
const ticketHour=[0,[1],[2],[2,1],[4],[4,1],[6],[6,1],[8],[8,1],[8,2],[8,2,1],[12],[12,1],[12,2],[12,2,1],[12,4],[12,4,1],[12,6],[12,6,1],[12,8],[12,8,1],[12,8,2],[12,8,2,1],[12,12]]
const ticketCost=[0]

for(let i=1;i<ticketHour.length;i++){
    ticketCost[i]=0
    for(let j=0;j<ticketHour[i].length;j++){
        let sum=0
        let total=0
        switch(ticketHour[i][j]){
            case 1:
                sum=2000
               break
            case 2:
                sum=3000
                break
            case 4:
                sum=5000
                break
            case 6:
                sum=7000
                break
            case 8:
                sum=8000
                break
            case 12:
                sum=10000
                break
        }
        ticketCost[i]+=sum
    }
}
function calculate(time,cost,hours){ //정액권 시간,정액권 요금,공부할 시간
    const first=[]
    const second=[]
    const answer=[]
    if(time%hours===0){
        first.push(ticketHour[hours],ticketCost[hours])
    }
    else{
        first.push(ticketHour[hours],ticketCost[hours],time%hours,ticketCost[time%hours])
    }
    for(let i=hours+1;i<ticketCost.length;i++){
        if(ticketCost[hours]>=ticketCost[i]){
            second.push(ticketCost[i],i) //더 좋은 가격과 그 가격의 시간 푸시
            break;
        }
    }
    answer.push(first,second)
    return answer
}
function ResultBtn({value,fee,hours,days}){
    const [loading,setLoading]=useState(true)
    const [result1,setResult1]=useState(null)
    const [result2,setResult2]=useState(null)
    const [result3,setResult3]=useState(null)
    const [result4,setResult4]=useState(null)
    const [result5,setResult5]=useState(null)
    const change=()=>{
        setResult1(null)
        setResult2(null)
        setResult3(null)
        setResult4(null)
        setResult5(null)
        fee=null
        hours=null
        days=null
    }
    useEffect(()=>{
        change()
    },[value])
    let time=0 //사용할 정액권의 시간
    let cost=0 //정액권 가격
    const resultClick=()=>{

        console.log(value,fee,hours,days)
        
        if(value===null && fee===null && hours===null && days===null){ //잘못된 값 처리
            alert('정확한 값을 입력해 주세요')
            return
        }
        if(value==='정액권' && (fee===null || hours===null)){ //잘못된 값 처리
            alert('정확한 값을 입력해 주세요')
            return 
        }
        if(value==='기간권' && (fee===null || hours===null || days===null)){ //잘못된 값 처리
            alert('정확한 값을 입력해 주세요')
            return
        }
        if(value==='정액권'){
            const answer=calculate(time,cost,hours)
            setLoading(false)    
            time=(fee[0]==='5')?50:100
            cost=(time===50)?70000:120000
            console.log(answer)
            setResult1(`선택하신 요금제는 ${fee} 이고 하루에 공부할 시간은 ${hours}시간 입니다.`)
            setResult2(`${parseInt(time/hours)}일 안에 사용가능`)
            if(time%hours!==0){ //공부할시간이 나누어 떨어지지 않을때
                setResult3(`하고 ${parseInt(time%hours)} 시간 남음`)
                if(answer[0][0].length===1){ //알맞은 시간권 있을때
                    setResult4(`${parseInt(time/hours)}일 동안 ${answer[0][0]}시간권 (${answer[0][1]*parseInt(time/hours)} 원) 사용 + 1일 동안 ${ticketHour[time%hours][0]}시간권 (${ticketCost[time%hours]}) = ${answer[0][1]*parseInt(time/hours)+ticketCost[time%hours]}원`)
                }
                else if(answer[0][0].length===2){
                    setResult4(`${parseInt(time/hours)}일 동안 ${answer[0][0]}시간권 (${answer[1][0]*parseInt(time/hours)}원) 사용 + 1일 동안 ${ticketHour[time%hours][0]}시간권 (${ticketCost[time%hours]}) = ${answer[0][1]*parseInt(time/hours)+ticketCost[time%hours]}원`)
                }
            }
            else{ //공부할 시간이 나누어 떨어질 때
                setResult3(null)
                if(answer[0][0].length===1){
                    setResult4(`${parseInt(time/hours)}일 동안 ${answer[0][0]}시간권 (${answer[0][1]*parseInt(time/hours)} 원) 사용 = ${answer[0][1]*parseInt(time/hours)+ticketCost[time%hours]}원`)
                }
                else if(answer[0][0].length===2){
                    setResult4(`${parseInt(time/hours)}일 동안 ${answer[0][0]}시간권 (${answer[1][0]*parseInt(time/hours)}원) 사용  = ${answer[0][1]*parseInt(time/hours)+ticketCost[time%hours]}원`)
                }
            }
            if(answer[1].length===2){
                if(time%hours!==0){
                    setResult5(`${parseInt(time/hours)}일 동안 ${answer[1][1]}시간권 (${answer[1][0]*parseInt(time/hours)}원) + 1일 동안 ${ticketHour[time%hours][0]}시간권 (${ticketCost[time%hours]}) = ${answer[0][1]*parseInt(time/hours)+ticketCost[time%hours]}원`)
                }  
                else{
                    setResult5(`${parseInt(time/hours)}일 동안 ${answer[1][1]}시간권 = ${answer[1][0]*parseInt(time/hours)}원`)
                }
            }
            else{
                setResult5(null)
            }
            return setLoading(true)
        }
        else if(value==='기간권'){
            console.log(12323)
            setResult1(`선택하신 요금제는 ${fee} 이고 총 공부 시간은 ${Number(fee[0])*hours*days}시간 입니다.`)
            setResult2(`${ticketHour[hours]}시간 (${ticketCost[hours]}원), ${Number(fee[0])*days}일 동안 사용 = ${Number(fee[0])*days*ticketCost[hours]}원`)
        }
    }
    return (
        <div>
            <button onClick={resultClick} style={{marginBottom:'10px'}}>계산</button>
            {(value==='정액권')?
                <div>
                    <h4>{result1}</h4>
                    <h4 style={{color:'red'}}>{result2}{result3}</h4>
                    <h4>{result4}</h4>
                    <h4>{result5}</h4>
                </div>
                :
                <div>
                    <h4>{result1}</h4>
                    <h4>{result2}</h4>    
                </div>}
        </div>
    )
}

export {ResultBtn}