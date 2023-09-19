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
    const [ rankSearch, setRankSearch ] = useState("")

    const [ showEdit, setShowEdit ] = useState(false)

    // quiz
    const [ quizQuestions, setQuizQuestions ] = useState([])
    const [ quizCount, setQuizCount ] = useState(0)
    const [ quizCategory, setQuizCategory ] = useState("")


    const [ count, setCount ] = useState(0)

    const updateCurrentPage = (page) => {
        setCurrentPage(page)
    }

    const normalizeTimeStamp = (time) => {
        const norm = new Date(time)

        let hours = norm.getHours(norm)
        hours = hours >= 10 ? hours : '0'.concat(hours)

        let minutes = norm.getMinutes(norm)
        minutes = minutes >= 10 ? minutes : '0'.concat(minutes)
        const suffix = hours >= 11 ? "am" : "pm"

        let day = norm.getDate()
        day = day >= 10 ? day : '0'.concat(day)

        let month = norm.getMonth() + 1 // um behind by 1? for 0 based indexing i learned
        month = month >= 10 ? month : '0'.concat(month)

        const year = norm.getFullYear()

        return {hours, minutes, suffix, day, month, year}
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
            rankSearch, setRankSearch,

            pageCategories,

            quizQuestions, setQuizQuestions,
            quizCount, setQuizCount,
            quizCategory, setQuizCategory,

            normalizeTimeStamp,

            count, setCount,

        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider