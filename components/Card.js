import styles from '@/styles/Home.module.css'
// import Image from 'next/image'

export default function Card({ value }) {
    const spacerGif = "https://st.discogs.com/ca7987480edf1ba816aab73e71dbdbc2add85fed/images/spacer.gif"
    return (
        <>
        <div className={styles.card}>
            <img src={value.cover_image == spacerGif ? '/placeholder.png' : value.cover_image} alt="" />
            <div className={styles.cardDesc}>
                <hr/>
                <h3>{value.title}</h3>
                <p>Type: <span>{value.type}</span></p>
                <button className={styles.cardLink}>Detail</button>
            </div>
        </div>
        </>
    )
}



/** nirvana template
 *         <div className={styles.card}>
            <img src="https://i.discogs.com/BS3W-WDYXuQMwoS8pwYBAvXIxT1mNKeLeg7W0A9l5sk/rs:fit/g:sm/q:90/h:450/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyNTI0/Ni0xNTI5MTk4Mjg4/LTY0MzAuanBlZw.jpeg" alt="" />
            <div className={styles.cardDesc}>
                <hr/>
                <h3>Nirvana</h3>
                <p>Type: artist</p>
                <button className={styles.cardLink}>Detail</button>
            </div>
        </div>
 */