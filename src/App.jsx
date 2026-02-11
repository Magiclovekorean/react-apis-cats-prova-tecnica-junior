import { useState, useEffect } from 'react'
import './App.css'
const CAT_RANDOM_FACT_ENDPOINT = "https://catfact.ninja/fact"
const CAT_IMAGE_URL_ENDPOINT = "https://cataas.com/cat/says/"

function App() {


    const [catFact, setCatFact] = useState()

    const [catImageUrl, setCatImageUrl] = useState()

    const [firstThreeWords, setFirstThreeWords] = useState()

    useEffect(() => {
        fetch(CAT_RANDOM_FACT_ENDPOINT)
            .then(response => response.json())
            .then(data => setCatFact(data.fact))
    }, [])


    useEffect(() => {
        if (!catFact) return


        const firstWords = catFact.split(" ").slice(0, 3).join(" ")
        setFirstThreeWords(firstWords)


        fetch(`https://cataas.com/cat/says/${firstWords}?json=true`)
            .then(response => response.json())
            .then(data => setCatImageUrl(data.url))
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
