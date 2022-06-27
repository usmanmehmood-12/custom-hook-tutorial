import React, { useEffect, useState } from 'react'

function getSavedValue(key, initialValue) {

    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialValue instanceof Function) {
        return initialValue()
    }
    return initialValue
}

function useLocalStorage(key, initialValue) {
    /**
     * reason for using the function version here is because we dont
     * want to always call json.parse and call localstorage every time
     * we render our component because its pretty slow. 
     * So we are only going to do this once, the first time our component loads
     * when it needs to get that initial value
     */
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setValue]
}

export default useLocalStorage