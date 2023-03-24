import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { ReactElement } from 'react'
import Menu from '../features/menu/menu'

const Home = () => {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
