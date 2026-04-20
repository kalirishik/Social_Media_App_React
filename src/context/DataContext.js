import { createContext } from "react";
import useWindowSize from "../hook/useWindowSize";

const DataContext = createContext({});

export const DataProvider=({children})=>{
    const {width}=useWindowSize();
    return (
        <DataContext.Provider value={{
            width
        }}>
            {children}
        </DataContext.Provider>  
    )
}

export default DataContext;
