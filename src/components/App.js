import React, {useState, useEffect} from 'react'

function App() {
    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r=> r.json())
            .then(data=> setImage(data.message))
    }, [])

    if (!image) return <p>Loading...</p>

    return (
        <>
        <h2>
            Here is a random dog picture!
        </h2>
        <img src={image} alt="A Random Dog"></img>
        </>
    )
        
  
}

export default App
