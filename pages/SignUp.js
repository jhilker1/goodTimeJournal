import React , { Component } from 'react';
import PersistentNav from "../comps/partials/PersistentNav";

function SignUp() {
    const [name, setName] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")

    function handleUpdate(evt){
        setName(evt.target.value);
    }

    function handleUpdateUsername(evt){
        setUsername(evt.target.value);
    }

    function handleUpdatePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleUpdateEmail(evt) {
        setEmail(evt.target.value);
    }

    async function handleSignup(evt) {
        // call sign up
        // await signup(name,user,pass,email)
    }

        return(
            <form className="login-form">
                
                <div>
                <PersistentNav>
                    <h1>Create an Account!</h1>
                    <div className="form-group">
                        <label for="realname">
                            Real Name:    
                        </label>
                        <input type="text" value={name} placeholder="Your name" onChange={handleUpdate}/>
                    </div>
                    <div className="form-group">
                        <label for="Username">
                            Username: 
                        </label>
                        <input type="text" value={username} placeholder="Your Desired Username" onChange={handleUpdateUsername}/>
                    </div>
                    <div className="form-group">
                        <label for="Password">
                            Password:
                        </label>
                        <input type="Password" value={password} placeholder="**********" onChange={handleUpdatePassword}/>
                    </div>
                    <div className="form-group">
                        <label for="Email">
                            Email: 
                        </label>
                        <input type="Email" value={email} placeholder="Valid@Email.com" onChange={handleUpdateEmail}/>
                    </div>
                    <input type="submit" value="Submit" />
            </PersistentNav>
                </div>
            </form>
        )
    
}

export default SignUp
