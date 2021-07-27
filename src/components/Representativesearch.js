import { useState } from "react"
import { APIKEY } from "../config.js"
import RepresentativeSearchResults from "./RepresentativeSearchResults.js"

function RepresentativeSearch({user}) {
    const [address, setAddress] = useState('')
    const [offices, setOffices] = useState([])
    const [officials, setOfficials] = useState([])
    
console.log('USER ===>', user)

    const searchRepresentatives = () => {
        console.log('searching...')
        // fetch or civic info end point

        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${APIKEY}`)
        .then(response => response.json())
        .then(json => {
            setOffices(json.offices)
            setOfficials(json.officials)
            return 
        })
        .catch(error => console.log(error))
        // then store results in my state

    }
    
    //Representativesearch.js:11 GET https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=6503%20n%20military%20trail%20boca%20raton%20fl&key=AIzaSyAEhz_fsejkroNfQw1hctZSP7Ib1PcWmdU
    
    return (
    <div className="search-container">
        <h1>Search Representative By Address</h1>
        <input
        name="representativesearch"
        type="text"
        className="search-bar"
        value={address}
        onChange={e => setAddress(e.target.value)}
        />
        <div>
        <button 
        className="submit-btn"
        onClick={() => searchRepresentatives()}
        >
            Submit
        </button>
        </div>
        <RepresentativeSearchResults offices={offices} officials={officials} />
    </div>
    )
}

export default RepresentativeSearch