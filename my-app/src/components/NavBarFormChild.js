import React from 'react'

function NavBarFormChild(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <form>
                    <label for="name">Name</label>
                    <input id="name"></input>
                    <label for="password">Password</label>
                    <input type="password" id="Password"></input>
                    <button onClick={props.handleClick} >Submit</button>
                </form>
            ) : (
                <button onClick={props.handleClick}>Login</button>
            )}
        </div>
    )
}
export default NavBarFormChild