'use client'
import { useTransition } from 'react'
import styles from './page.module.css'
import setCookieMaxAge from './_actions/setCookieMaxAge';

export default function Home() {

  const [ isPending, startTransition ] = useTransition();


  const handleClick = () => {

    startTransition(() => {
      setCookieMaxAge()
    })

  }
  
  return (
    <main className={styles.main}>
      <button onClick={handleClick} disabled={isPending} style={{ padding: 25 }}>{isPending ? '...' : 'Set Cookie'}</button>
    </main>
  )
}
