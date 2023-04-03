'use-client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

type DataType = {
    firstName: string
}
interface MapProps  {
    extent: {
        xmin: number, ymin: number, xmax: number, ymax: number
    },
    basemap: string,
    syncMode: boolean,
    zoom: number,
}
interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>,
    role: string,
    setRole: Dispatch<SetStateAction<string>>,
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>,
    data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>,
    types: string[],
    setTypes: Dispatch<SetStateAction<string[]>>,
    mapProps: MapProps,
    setMapProps: Dispatch<SetStateAction<MapProps>>,
}

const calculateWidth = () => {
    return 3
}
const GlobalContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
    role: '',
    setRole: (): string => '',
    selected: '',
    setSelected: (): string => '',
    data: [],
    setData: (): DataType[] => [],
    types: [],
    setTypes: (): string[] => [],
    mapProps: { extent: { xmin: 0, ymin: 0, xmax: 13, ymax: 0 }, basemap: '', syncMode: true, zoom: 7 },
    setMapProps: (): void => {},

})

// Sets up the store and the default values
export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState('Dan Default');
    const [role, setRole] = useState('Admin');
    const [selected, setSelected] = useState('');
    const [types, setTypes] = useState<[] | string[]>(['Downloads', 'Coal', 'Context']);
    const [data, setData] = useState<[] | DataType[]>([]);
    const [mapProps, setMapProps] = useState({
        basemap: 'topo',
        syncMode: true,
        zoom: 7,
        extent: {
            xmin:0,
            ymin:0,
            xmax:13,
            ymax:0,
        }
    });

    return (
        <GlobalContext.Provider value={{ userId, setUserId, data, setData, mapProps, setMapProps, role, setRole, types, setTypes,selected, setSelected }} >
            {children}
        </GlobalContext.Provider>
    )
}
export const DerivedState = (mapProps: MapProps) => {
    return {
        width: mapProps ? mapProps.extent.xmax - mapProps.extent.xmin : 0
    }
}

export const useGlobalContext = () => useContext(GlobalContext);