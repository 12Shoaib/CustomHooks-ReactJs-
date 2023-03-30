import {useState,useEffect} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [ apiData , setApiData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setApiData(response)
        })
    } , [url])

    return apiData

}

export default useFetch