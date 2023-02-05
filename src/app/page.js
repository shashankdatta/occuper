import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/occuper.png"
          alt="Occuper Logo"
          width={180}
          height={180}
          priority
        />
      </div>
      <div>
        <a
          href="/api/auth/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Login <span>-&gt;</span>
          </h2>
        </a>
      </div>
    </main>
  )
}
