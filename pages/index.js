import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mind First</title>
        <meta name="description" content="Mind First" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mind First
        </h1>

        <p className={styles.description}>
          Meet with people you're already close to!
        </p>

        <div className={styles.grid}>
          <div
          >
            <h3>Access the Beta, drop your email.</h3>
          </div>
        </div>
      </main>
    </div>
  )
}
