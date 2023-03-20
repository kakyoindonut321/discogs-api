import styles from '@/styles/Home.module.css'
import Card from '../components/Card'

export default function Mountain() {
    function mapCard(data, keye) {
        return <Card value={ data } key={ keye }></Card>
    }
    const mappedCard = ["a", "b", "c", "a", "b", "c", "a", "b", "c"].map((item, i) => {
        return mapCard(item, i);
    });
    
    return (
        <>
        <div className={styles.parentResult}>
            <div className={styles.resultCon}>
                { mappedCard }
            </div>
        </div>
        </>
    )
}
