import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './layout.module.css'
import { GlobalContextProvider, useGlobalContext } from './Context/store';
import MainContent from '../features/MainContent'


export default function Layout({ children }: any) {
    console.log('layout')
    console.log(children)
    const router = useRouter()
    const { selected } = useGlobalContext()
    const [showPrevious, setShowPrevious] = useState(true)
    useEffect(() => {
        setShowPrevious(router.asPath.includes('/webmap'))
        console.log('set show prev / selected = ' + { showPrevious } + " / " + { selected })
    }, [router])
    return (
        <>
            <GlobalContextProvider>
                <Head>
                    <title>Questions and Answers</title>
                </Head>
                <div className={styles.layout}>
                    <header className={styles.header}>
                        {/* {
                            showPrevious ?
                                <Link href="/">
                                    <a>
                                        <svg className={styles.link} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M14 5.25L3.25 16 14 26.75V20h14v-8H14zM27 13v6H13v5.336L4.664 16 13 7.664V13z" /><path fill="none" d="M0 0h32v32H0z" /></svg>
                                    </a>
                                </Link>
                                : null
                        } */}
                        <div className={styles.container}>
                            <h3>The 39th Parallel</h3>
                        </div>
                    </header>
                    <main className={styles.main}>{children}
                        <MainContent></MainContent>
                    </main>

                </div>
            </GlobalContextProvider>
        </>
    )
}