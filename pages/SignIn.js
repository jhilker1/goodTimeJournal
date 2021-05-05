import React , { Component } from 'react';
import PersistentNav from "../comps/partials/PersistentNav";


function SignIn() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    function handleUpdate(evt){
        setUsername(evt.target.value);
    }

    function handleUpdatePassword(evt) {
        setPassword(evt.target.value);
    }

        return(
            <form className="login-form">
                <div>
                <PersistentNav>
                <h1>Log in to an Existing Account:</h1>
                    <div className="form-group">
                        <label for="Username">
                            Username:   
                        </label>
                        <input type="text" value={username} placeholder="Your Desired Username" onChange={handleUpdate}/>
                    </div>
                    <div className="form-group">
                        <label for="Password">
                            Password:  
                        </label>
                        <input type="Password" value={password} placeholder="***********" onChange={handleUpdatePassword}/>
                    </div>
                    <input type="submit" value="Submit" />
            </PersistentNav>
                </div>
            </form>
        )
    
}

export default SignIn
