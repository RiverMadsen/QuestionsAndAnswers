import styles from '../../styles/Home.module.css'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { updateTypes } from './menuSlice'
import Loader from '../../components/loader'
import { useRouter } from 'next/router'

const fetcher = async (
    input: RequestInfo,
    init: RequestInit,
    ...args: any[]
) => {
    const res = await fetch(input, init)
    return res.json()
}

const Menu = (props: any) => {
    const { data, error } = useSWR('/api/questions', fetcher)
   
    const types = useAppSelector(({store}) => store.menu.types )
    const dispatch = useAppDispatch()
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        if (data) {
            // ebugger // xx
            dispatch(updateTypes(data.types))
            setLoading(false)
        }
    }, [data, error, dispatch])

    if (isLoading)
        return (
            <div className={styles.loader}>
                <Loader />
            </div>
        )
    const handleMenuClick = (value: string) => {
        if(value === 'Downloads'){
            router.push(`/downloads`)
        }
        else{
            router.push(`/webmap?type=${value}`)
        }
    }

    if (!types.length) return <p>No data</p>

    return (
        <ul className={styles.list}>
            {types.map((value, idx) => (
                <li
                    className={styles.listItem}
                    key={`${value}-${idx}`}
                    onClick={ () => handleMenuClick(value) }
                >
                    {value}
                </li>
            ))}
        </ul>
    )
}

export default Menu
