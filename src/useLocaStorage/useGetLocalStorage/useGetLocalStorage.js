import {useState,useEffect} from 'react'

const useGetLocalStorage = (key) => {
    const [result, setResult] = useState(null)

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem(key))
    setResult(res)
    },[key])

    return result
}

export default useGetLocalStorage