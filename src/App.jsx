import { useState, useEffect } from 'react'
import './App.css'
const CAT_RANDOM_FACT_ENDPOINT = "https://catfact.ninja/fact"
const CAT_IMAGE_URL_ENDPOINT = "https://cataas.com/cat/says/"

function App() {


    const [catFact, setCatFact] = useState()

    const [catImageUrl, setCatImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_RANDOM_FACT_ENDPOINT)
            .then(response => response.json())
            .then(data => setCatFact(data.fact))
    }, [])


    useEffect(() => {
        fetch("https://cataas.com/cat/says/hello?json=true")
            .then(response => response.json())
            .then(data => setCatImageUrl(data.url))
        console.log(`hello, the catFact state is ${catImageUrl}`)
    }, [catFact])

    return (
        <main>
            <h1>App de gatos</h1>
            {catFact && <p>{catFact}</p>}
            {catImageUrl && <img src={catImageUrl} />}
        </main>
    )
}

export default App
