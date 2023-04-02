import styles from '../styles/MainContent.module.css'
import Layout from '../components/layout'
import { ReactElement } from 'react'
import Menu from './menu/menu'
import { useRouter } from 'next/router'
import WebMap from '../pages/webmap' //pages\webmap.tsx
import { useState, useEffect } from 'react'

const MainContent = () => {

  // useEffect( ()=> {
  //   const router = useRouter();
  //   router.push(`webmap?type=coal`)
  // }, [useRouter])
  //const handleClick = () => {

  const router = useRouter();
  useEffect(() => {
    router.push('/webmap?page=home');
  }, []);



  return (
    <>
      {/* <WebMap></WebMap> */}
      <div className={styles.mainContent}>
        Now is the time for all good men to come to the aid of their nation.
        {/* <button onClick={handleClick}>
          Go to Coal Webmap
        </button> */}
      </div>
    </>
  )
}

MainContent.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}
  </Layout>
}

export default MainContent
