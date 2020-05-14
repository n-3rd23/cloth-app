import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.util'

function Header({currentUser}) {
    return (
        <div className="header">
            <Link className="logo-container" to="/" >
                <Logo className="logo" />
            </Link>
            <div className="options">
            <Link className="option" to="/">Home</Link>
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SignOut</div> :
                    <Link className="option" to="/signin">SignIn</Link>
                }
            </div>
        </div>
    )
}

export default Header
