import styles from '../styles/WebMap.module.css'
import Layout from '../components/layout'
import { ReactElement, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useGlobalContext } from '../components/Context/store'
import { MapData } from '../components/MapData'

async function loadMap(container: HTMLDivElement, filter: string, onExtentChange: any) {
    // debugger
    const { initialize } = await import('../data/mapping')
    return initialize(container, filter, (x: any) => {
        onExtentChange(x)
    })
}

const WebMap = () => {
    const mapRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    let { type } = router.query
    type = type === undefined ? 'Coal' : type
    
    // if(type === undefined){
    //     router.push(`/webmap?type=${value}`)
    // }
    //ebugger
    const { selected, setSelected, mapProps, setMapProps} = useGlobalContext();

    let width = 0

    // When this page first executes, it gets the argument from the route URL. 
    useEffect(() => {
        //ebugger
        setSelected((type as string).toString())
    }, [type])

    const onExtentChange = (x: any) => {
        console.log('Width ' + width)
        width = x.xmax - x.xmin
        let newMapProps = {...mapProps}
        newMapProps.extent = {xmax: x.xmax, ymax:x.ymax,xmin:x.xmin,ymin: x.ymin}
        if(setMapProps){
            setMapProps(newMapProps)
        }
        
    }

    useEffect(() => {
        let asyncCleanup: Promise<(() => void)>
        if (mapRef.current && selected) {
            //ebugger
            asyncCleanup = loadMap(mapRef.current, selected, onExtentChange)
        }
        return () => {
            asyncCleanup && asyncCleanup.then((cleanup) => cleanup())
        }
    }, [mapRef, selected])

    return (
        <div className={styles.container}>
            <div className={styles.viewDiv} ref={mapRef}></div>
           <MapData></MapData>
        </div>
    )
}

WebMap.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default WebMap
