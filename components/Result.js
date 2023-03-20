import styles from '@/styles/Home.module.css'
import Card from '../components/Card'

export default function Result({ queries }) {
    const iterateData = queries.data.results;
    console.log(iterateData);
    function mapCard(data, keye) {
        return <Card value={ data } key={ keye }></Card>
    }
    const mappedCard = iterateData.map((item, i) => {
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
