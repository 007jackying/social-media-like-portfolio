import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './NavMenu.module.css'
import { SignInButton } from './components/buttons'

export default function NavMenu(): React.ReactElement {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <div
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/logo.png" // Route of the image file
            width={60}
            height={55}
            style={{ objectFit: 'cover' }}
            alt="NextSpace Logo"
          />
        </div>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/portfolio'}>Dashboard</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  )
}
