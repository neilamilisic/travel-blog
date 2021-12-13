import React from "react"
import ReactDOM from "react-dom"
import data from "./data.js"
import Travelplace from "./Travelplace.js"
import Navbar from "./Navbar"
import '../src/style.css';

function App() {
    
    const dataArray = data.map(item => {return(
        <Travelplace
        key={item.id}
        imageUrl={item.imageUrl}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        />)
        }
    ) 
    
    return(
        <div id="container">
            <Navbar />
            <div>{dataArray}</div>
        </div>
    )
}


export default App