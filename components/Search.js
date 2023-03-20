import styles from '@/styles/Home.module.css'

export default function Search() {
  return (
    <>
    <form className={styles.searchCon}>
        <input type="text" placeholder='search here'/>
        <button><i className='bx bx-search-alt'></i></button>
    </form>
    </>
  )
}
