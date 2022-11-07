import {useState} from 'react'

function ResultBtn({value,fee,hours,days}){
    const [loading,setLoading]=useState(true)
    const [result1,setResult1]=useState(null)
    const [result2,setResult2]=useState(null)
    const [result3,setResult3]=useState(null)
    let time=0
    //let time=(fee[0]==='5')?50:100
    const resultClick=()=>{
        
        setLoading(false)
        if(value==='정액권'){
            time=(fee[0]==='5')?50:100
            setResult1(`선택하신 요금제는 ${fee} 이고 하루에 공부할 시간은 ${hours}시간 입니다.`)
            setResult2(`${parseInt(time/hours)}일 안에 사용가능`)
            if(time%hours!==0){
                setResult3(`하고 ${parseInt(time%hours)} 시간 남음`)
            }
        }
    }
    return (
        <div>
            <button onClick={resultClick}>계산</button>
            {(loading)?null:
            <div>
                <h3>계산결과</h3>
                {(value==='정액권')?
                <div>
                    <h4>{result1}</h4>
                    <h4 style={{color:'red'}}>{result2}{result3}</h4>
                </div>
                :null}
            </div>}
        </div>
    )
}

export {ResultBtn}