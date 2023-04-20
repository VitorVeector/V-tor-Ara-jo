import React, { createContext, useState } from 'react';

interface DataContextProps{
    isSubmiting: boolean;
    setIsSubmiting: (boolean: boolean) => void;
}

interface DataContextProviderProps{
    children: React.ReactNode
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
    const [isSubmiting, setIsSubmiting] = useState<boolean>(false)

    return (
        <DataContext.Provider value={{isSubmiting, setIsSubmiting}}>
            { children }
        </DataContext.Provider>
    )

}