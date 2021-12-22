import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const navigationLabels = ['Services', 'Expertise', 'Case Studies', 'Company', 'Insights', 'Contact Us'];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <img src="/Logo.svg" alt="Incora logo"/>

          <nav className={styles.nav}>
            {navigationLabels.map((nav, index) => {
              if (nav === 'Services' || nav === 'Expertise' || nav === 'Company') {
                return (
                  <ul key={index} className={styles.navContainer}>
                    <li key={index}>{nav}</li>
                    <div className={styles.navArrow}></div>
                  </ul>
                )
              }

              if (nav === 'Contact Us') {
                return (
                  <ul key={index} className={styles.navButton}>
                    <li key={index}>
                      <Link href={'/ContactUs'}>
                        <a className={styles.navButtonContactUs}>
                          <p>{nav}</p>
                          <div className={styles.navButtonArrow}></div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}

              return (
                <ul key={index} className={styles.navContainer}>
                  <li key={index}>{nav}</li>
                </ul>
              )})}
          </nav>
        </div>
        <div className={styles.title}>
          <h1 className={styles.mainTitle}>Deepen to the</h1>
          <h1 className={styles.secondaryTitle}>Core of Idea</h1>
        </div>
      </header>

      <main className={styles.main}>
      </main>
    </>
  )
}
