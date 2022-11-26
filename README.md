# 스터디카페 계산기
### 주소
https://kangaroo19.github.io/studycafe/
## 1.개요
평소 스터디카페에서 공부하는 저는 이용권을 구매할 때마다 어떤 이용권이 좀더 금전,시간적으로 경제적인지 알아보기위해 머릿속으로 계산을 했었고 이런 과정을 좀더 편하게 만들기 위해 이 웹페이지를 만들게 되었습니다.

## 2.미리보기
![1](https://user-images.githubusercontent.com/86513078/204070035-d0ed0d18-caa6-4887-b4bd-a0acccb9cb67.PNG)

이용권(기간권 또는 정액권)을 선택하고 하루에 공부할 시간 등을 선택하면 그와 비슷한 정도의 기간권을 추천해 주고 선택한 이용권을 사용하는 것이 경제적인지 추천해준 기간권을 사용하는 것이 경제적인지 알 수 있습니다.

## 3.코드
다음 5개의 컴포넌트로 구성
- App.js : 부모 컴포넌트이다 Select,StudyHour,StudyDay.js 에서 보낸 값 받아서 ResultBtn.js에서 처리
- Select.js : 요금제 선택
- StudyHour.js : 공부할 시간
- StudyDay.js : 공부할 일 수 (정액권 일때는 선택없음)
- ResultBtn.js : 결과출력

### Select.js
```JS
    const [fee,setFee]=useState(null)
    const [type,setType]=useState(null) //어떤 자식컴포넌트에서 부모 컴포넌트로 보냈는지 판별 위한 식별자

    const feeClick=(e)=>{ 
        e.preventDefault()
        setFee(e.target.value)
        setType('Select')
    }
    
    useEffect(()=>{
        $('#select').val('선택하세요') //value 값이 바뀌면 옵션태그 첫번째 위치로 초기화
        setFee(null)
      },[value])
```
버튼 클릭하면 해당 값이 fee에 저장되고 그 값 부모 컴포넌트(App.js)로 보냄

### StudyHour.js
```JS
const [hours,setHours]=useState(null)
const onSubmit1=(event)=>{
        event.preventDefault()
        const time=Number($('#value1').val())
        if(1>time || time>12){ //잘못된 값 처리
          alert('1~12 사이의 값을 입력해 주세요')
          return
        }
        setHours(time)
        setType('StudyHour')
      }
      useEffect(()=>{ //value값 바뀌면 input 초기화
        $('#value1').val('')
      },[value])
```
input태그에 입력한 값이 hours에 저장되고 그 값 부모 컴포넌트(App.js)로 보냄

### StudyDay.js
```JS
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
```
input 태그에 입력한 값 day에 저장되고 그 값 부모 컴포넌트(App.js)로 보냄 <br>이후
선택 해야 될 것들 모두 마치면 부모 컴포넌트로 보낸 값들을 ResultBtn.js에서 받아와 결과 출력

### ResultBtn.js
#### calculate 함수
```JS
function calculate(time,cost,hours){ //정액권 시간,정액권 요금,공부할 시간
    const first=[] //내가 선택한 것들 저장되는 배열
    const second=[] //대체 할 수 있는 시간권 저장되는 배열
    const answer=[]
    if(time%hours===0){
        first.push(ticketHour[hours],ticketCost[hours])
    }
    else{                
        first.push(ticketHour[hours],ticketCost[hours],
        time%hours,ticketCost[time%hours])
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
```
calculate함수는 내가 선택한(이용권,공부할 시간,요금)것들과 대체 할 수 있는 시간권이 있는 배열을 리턴해준다 이를 바탕으로 결과 출력<br>


- ticketHour : 공부할 시간에 사용할 수 있는 시간권의 조합 ex) 5시간 공부한다고 가정(5번째 인덱스) => 4시간권 + 1시간권 [4,1]
- ticketCost : ticketHour 각 요소의 드는 비용 ex)5시간 공부한다고 가정(5번째 인덱스) =>[4,1] 이므로 5000원+2000원=7000 저장되어 있음

## 4.기술스택
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/>
