import { useState } from 'react'
import firebase from 'firebase/app' // import firebase library
import 'firebase/auth' // import authentication part of library
import { firebaseConfig } from '../config' // import firebase config (public info)

function Signup ({setUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const createUser = () => {
        const formValues = {
            email: email
        }

        fetch('https://representative-finder-mb-api.web.app/users', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        .then(response => response.json())
        .then(json => {
            console.log('json--->', json)
            setLoading(false)
        })
        .catch(error => {
            alert(error)
            setLoading(false)
        })
    }
    
    const signUpUser = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log('Signing up...')
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }
         
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
            setLoading(false)
            setUser(response.user)
            createUser()
        })
        .catch(err => {
            setLoading(false)
            alert(err.message)
        })
        
    }

    return(
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={(e) => signUpUser(e)}>
                <label className="form-label">
                    Email:&nbsp;
                    <input
                    name="email"
                    type="text"
                    className="form-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                <label className="form-label">
                    Password:&nbsp;
                    <input
                    name="password"
                    type="password"
                    className="form-input"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                
                    <button className="submit-btn" type="submit"> 
                    {loading ? 'Loading...' : 'Submit'}
            
                </button>
            
            </form>
        </div>
    )
}

export default Signup