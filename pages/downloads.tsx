import styles from '../styles/WebMap.module.css'
import Layout from '../components/layout'
import { JSXElementConstructor, ReactElement, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { updateSelected } from '../features/menu/menuSlice'
import useSWR from 'swr'
import getFileSize from './api/getFileSize'
import { GetServerSideProps } from 'next';
import { Props } from 'next/script'


const Downloads: React.FC<Props> = ({ title }) => {
// const Downloads: { getLayout: (page: ReactElement<any, string | JSXElementConstructor<any>>) => JSX.Element }({ title:any }){
    return  <Layout><p> HELLO DOWNLOADS {title} </p></Layout>

}



// Downloads.getLayout = function getLayout(page: ReactElement) {
//     return <Layout>{page}</Layout>
// }

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    // Perform server-side logic here to get the title for the page
    console.log("ON THE SERVER")

    let size = await getFileSize("MyTextFile.txt")
    const sizeInKB: string = ((size ?? 0) / 1024).toFixed(2);
    const title = 'Size: ' + sizeInKB + " KB";

    return {
        props: {
            title,
        },
    };
};



export default Downloads