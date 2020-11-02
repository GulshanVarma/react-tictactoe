import React from 'react'
import {Link} from 'react-router-dom'

const login = () => {    
    return (
        <div>
            <h1>Login page</h1>
            {/* <button component={Link} to="/play">
                Click Me
            </button> */}
            <Link to='/play'>Click Me</Link>
        </div>
    );
}

export default login;