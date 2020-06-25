import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {

    
    return (
        <div className='nav'>
            <nav>
                 <a href='/'>Home</a>
                 <Link to={`/signin`}>
                    <span>  Log In</span>
                 </Link>
                 <Link to={`/`}>
                    <span>  Sign Up</span>
                 </Link>
                 <a href='/'>About Us</a>
                 <Link to={`/`}>
                    <span>  Search</span>
                 </Link>
            </nav>
        </div>
    )
}
export default Nav