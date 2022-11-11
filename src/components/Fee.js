import styles from './Fee.module.css'

function Fee(){
    return(
       <div className={styles.background}>
        <div className={styles.container}>
        <div>
        <div className={styles.font}>시간권</div>
        <ul>
            <li>1시간 2,000원</li>
            <li>2시간 3,000원</li>
            <li>4시간 5,000원</li>
            <li>6시간 7,000원</li>
            <li>8시간 8,000원</li>
            <li>10시간 10,000원</li>
        </ul>
        </div>
        <div>
        <div className={styles.font}>기간권</div>
        <ul>
            <li>1주 50,000원</li>
            <li>2주 80,000원</li>
            <li>4주 130,000원</li>
        </ul>
        </div>
        <div>
        <div className={styles.font}>정액권</div>
        <ul>
            <li>50시간 70,000원</li>
            <li>100시간 120,000원</li>
        </ul>
        </div>
        </div>
       </div>
    )
}

export {Fee}