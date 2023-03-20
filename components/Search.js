import { useId, useState } from 'react';
import styles from '@/styles/Home.module.css'

export default function Search({onSearch}) {
  const [input, setInput] = useState('');
  const these = "this is the data"
  return (
    <>
    <form className={styles.searchCon}>
        <input type="text" value={input} onInput={(e) => {setInput(e.target.value)}}/>
        <button onClick={(e) => {onSearch(input, e)}}><i className='bx bx-search-alt'></i></button>  
    </form>
    </>
  )
}
 

// e.target.value