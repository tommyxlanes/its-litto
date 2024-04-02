'use client'

import { cannabisType } from "@/lib/data";
import { createContext, useContext, useState } from "react";

type sectionName = (typeof cannabisType)[number]['type']

type Props = {
    children: React.ReactNode
}

type activeSelectionType = {
    activeSelection: sectionName;
    setActiveSelection: React.Dispatch<React.SetStateAction<sectionName>>
}

const ActiveContext = createContext<activeSelectionType | null>(null)

export const ActiveContextProvider = ({children}: Props) => {
    const [activeSelection, setActiveSelection] = useState<sectionName>('original')

    return (
        <ActiveContext.Provider value={{
            activeSelection,
            setActiveSelection
        }}>
            {children}
        </ActiveContext.Provider>
    )
}

export const useActiveSelection = () => {
    const context = useContext(ActiveContext)

    if(context === null) {
        throw new Error('useActiveSelection must be use within ActiveContextProvider')
    }

    return context
}