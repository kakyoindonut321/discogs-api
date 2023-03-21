import styles from '@/styles/Home.module.css'
// import Image from 'next/image'

export default function Card({ value, onModal }) {
    const spacerGif = "spacer.gif"
    return (
        <>
        <div className={styles.card}>
            <img src={value.cover_image.slice(-10) == spacerGif ? '/placeholder.png' : value.cover_image} alt="" loading="lazy" />
            <div className={styles.cardDesc}>
                <hr/>
                <h3>{value.title}</h3>
                <p>Type: <span>{value.type}</span></p>
            </div>
            <div className={styles.cardLinkFill}></div>
            <button className={styles.cardLink} onClick={(e) => {onModal(value.resource_url, value.type, e)}}>Detail</button>
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