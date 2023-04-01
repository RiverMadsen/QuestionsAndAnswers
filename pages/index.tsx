import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { ReactElement } from 'react'
import Menu from '../features/menu/menu'
import { useRouter } from 'next/router'
import WebMap from '../pages/webmap' //pages\webmap.tsx
import MainContent from '../features/MainContent'

const Home = () => {

  return (
    <div className={styles.container}>

      {/* <MainContent /> */}
      {/* <WebMap ></WebMap> */}
      {/* <MainContent></MainContent> */}
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}
  </Layout>
}

export default Home
