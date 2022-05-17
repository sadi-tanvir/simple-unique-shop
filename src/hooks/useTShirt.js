import axios from "axios"
import { useState,useEffect } from "react"

const useTShirt = () => {
    // custom hooks
    const [tShirt, setTShirt] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/product')
        .then(res => setTShirt(res.data))
    },[])

    return [tShirt, setTShirt]
}


export default useTShirt