import { createContext, useEffect, useState } from "react";

export const jobContext = createContext([]);

const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [editmode, setEditmode] = useState(false)
    const [selectedJobs , setSelectedJobs] = useState([])
    console.log(selectedJobs)

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setJobs(data.jobs))
    }, [])


    const seeMore = () => {
        setEditmode(!editmode)
    }

    const Selected = (id) => {
        const curJobs = jobs.find( item => item.id === id)
        setSelectedJobs([...selectedJobs, curJobs])
    } 

    const obj = {
        jobs,
        editmode,
        setEditmode,
        seeMore,
        Selected,
        selectedJobs
    }

    return (
        <jobContext.Provider value={obj}>
            {children}
        </jobContext.Provider>
    )
}

export default JobProvider

