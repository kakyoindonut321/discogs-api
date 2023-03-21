import styles from '@/styles/Home.module.css'
import Card from '../components/Card'
import { useState } from 'react';

export default function Result({ queries }) {
    const [loadModal, setLoadModal] = useState();
    const iterateData = queries.data.results;
    const modalToggle = (mdURL, e) => {
        e.preventDefault();
        console.log(mdURL)
    };
    function mapCard(data, keye) {
        return <Card value={ data } key={ keye } onModal={modalToggle}></Card>
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
        { loadModal }
        </>
    )
}
