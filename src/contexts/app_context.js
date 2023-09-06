import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = ( { children } ) => {

    const test = 'testing'

    const navigate = useNavigate()
    const [ user, setUser ] = useState(null)
    const [ showNav, setShowNav ] = useState(false)
    const [ showSearch, setShowSearch ] = useState(false)
    const [ search, setSearch ] = useState("")
    const [ currentPage, setCurrentPage ] = useState("headquarters")

    const [ showPopUp, setShowPopUp ] = useState(false)
    const [ showPostEdit, setShowPostEdit ] = useState(false)
    const [ currentPost, setCurrentPost ] = useState({})
    const [ editPostFormData, setEditPostFormData ] = useState({})

    const [ hqSearch, setHqSearch ] = useState("")
    const [intelSearch, setIntelSearch] = useState("")

    const [ showEdit, setShowEdit ] = useState(false)

    // quiz
    const [ quizQuestions, setQuizQuestions ] = useState([])
    const [ quizCount, setQuizCount ] = useState(0)
    const [ quizCategory, setQuizCategory ] = useState("")

    const updateCurrentPage = (page) => {
        setCurrentPage(page)
    }

    const normalizeTimeStamp = (time) => {
        const norm = new Date(time)

        const hours = norm.getHours(norm)
        const minutes = norm.getMinutes(norm)

        return {hours, minutes}
    }


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
            currentPage, setCurrentPage, updateCurrentPage,

            showPopUp, setShowPopUp,
            showEdit, setShowEdit,
            showPostEdit, setShowPostEdit,
            currentPost, setCurrentPost,
            editPostFormData, setEditPostFormData,


            hqSearch, setHqSearch,
            intelSearch, setIntelSearch,

            pageCategories,

            quizQuestions, setQuizQuestions,
            quizCount, setQuizCount,
            quizCategory, setQuizCategory,

            normalizeTimeStamp,

        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider