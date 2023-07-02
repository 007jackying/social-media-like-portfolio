import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Home: React.FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by clicking <Link href="/dashboard">Here!</Link>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}></div>
    </main>
  )
}

export default Home
