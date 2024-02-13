import { createContext, useEffect, useState } from "react";


export const jobContext = createContext([]);

const JobProvider = ({ children }) => {

    const storeJobs = JSON.parse(localStorage.getItem('key')) || []

    const [jobs, setJobs] = useState([]);
    const [editmode, setEditmode] = useState(false)
    const [selectedJobs , setSelectedJobs] = useState(storeJobs)
    const [filteredJob , setFilteredJob] = useState([])
      
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setJobs(data.jobs))
    }, [])

    useEffect(()=>{
        localStorage.setItem('key', JSON.stringify(selectedJobs))
    },[selectedJobs])


    const handleFilter = (filter) => {

        if ( filter === 'all') {
             setFilteredJob([])
        }
        else if( filter === 'remote'){
            const current = selectedJobs.filter( item => item.site === 'Remote')
             setFilteredJob(current)
        }
        else if( filter === 'onsite'){
            const current = selectedJobs.filter( item => item.site === 'Onsite')
             setFilteredJob(current)
        }
    }
    
    const seeMore = () => {
        setEditmode(!editmode)
    }

    const Selected = (id) => {

        const curJobs = jobs.find( item => item.id === id)
        setSelectedJobs([...selectedJobs, curJobs])
    } 
    
    const Cancel = (id)=> {
          const curJobs = selectedJobs.filter( item => item.id !== id)
          setSelectedJobs(curJobs),
          setFilteredJob(curJobs)
    }

    const obj = {
        jobs,
        editmode,
        setEditmode,
        seeMore,
        Selected,
        selectedJobs,
        Cancel,
        filteredJob,
        handleFilter

    }

    return (
        <jobContext.Provider value={obj}>
            {children}
        </jobContext.Provider>
    )
}

export default JobProvider

