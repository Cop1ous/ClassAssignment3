import {useState, useEffect} from "react"
import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

export default function exampleFive () {
    
    const [count, setCount] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            setCount = (count + 1)
        , 1000})

    }, 1000)
    
    return (
        <>
            <Header/>
            <main>
                

            </main>
            <Footer/>
        </>
    )
}