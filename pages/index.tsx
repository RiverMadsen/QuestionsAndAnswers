import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import WebMap from '../pages/webmap' //pages\webmap.tsx
import MainContent from '../features/MainContent'
import Head from 'next/head'

const Home = () => {
  //initDatabase()
  return (
    <>
    <title>Questions and Answers</title>
      <Head><link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className={styles.container}>

      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}
  </Layout>
}

export default Home
