import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = ( { children } ) => {

    const test = 'testing'

    const navigate = useNavigate()
    const [ user, setUser ] = useState(true)
    const [ showNav, setShowNav ] = useState(false)
    const [ showSearch, setShowSearch ] = useState(false)
    const [ search, setSearch ] = useState("")
    const [ currentPage, setCurrentPage ] = useState("headquarters")


    const pageCategories = ['HTML', "CSS", "Javascript", "React",]
    // const pageCategories = ['HTML', "CSS", "Javascript", "React", "Mongodb", "Express", "Node"]

    return (
        <AppContext.Provider value={{
            test,
            navigate,
            user, setUser,
            showSearch, setShowSearch,
            showNav, setShowNav,
            search, setSearch,
            currentPage, setCurrentPage,

            pageCategories, 

        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider