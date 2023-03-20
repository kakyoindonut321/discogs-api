import styles from '@/styles/Home.module.css'


export default function loading() {
    return (
        <>
        <div className={styles.loading}>
            <div className={styles.spinnerBox}>
                <div className={styles.pulseContainer}>  
                    <div className={styles.pbOne}></div>
                    <div className={styles.pbTwo}></div>
                    <div className={styles.pbThree}></div>
                </div>
            </div>
        </div>
        </>
    )
}
