import styles from '../styles/MapData.module.css'
import { useGlobalContext } from './Context/store'

export const MapData = ()=> {
    console.log("re-render MapData")
    const {mapProps} = useGlobalContext();
    return (
        <div className={styles.mapData}> {((mapProps?.extent.xmax - mapProps?.extent.xmin)/1000).toFixed(2)}</div>
    )
}
