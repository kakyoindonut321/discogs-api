import styles from '@/styles/Home.module.css'

export default function Card({ value }) {
    return (
        <>
        <div className={styles.card}>
            <img src="https://i.discogs.com/BS3W-WDYXuQMwoS8pwYBAvXIxT1mNKeLeg7W0A9l5sk/rs:fit/g:sm/q:90/h:450/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyNTI0/Ni0xNTI5MTk4Mjg4/LTY0MzAuanBlZw.jpeg" alt="" />
            <div>
                <h4>Nirvana</h4>
                <p>artist</p>
                <a href=""></a>
            </div>
        </div>
        </>
    )
}
