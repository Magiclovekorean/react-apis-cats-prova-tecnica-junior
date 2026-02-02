import { useState, useEffect } from 'react'
import './App.css'
function App() {


    const [catFact, setCatFact] = useState()

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(data => setCatFact(data.fact))
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            {catFact && <p>{catFact}</p>}
        </main>
    )
}

export default App
