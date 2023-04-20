import { useContext } from "react"

import { DataContext } from "../Context/DataContext"

export const useData = () => {
    const context = useContext(DataContext)

    return context;
}