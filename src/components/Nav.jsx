import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {

    
    return (
        <div className='nav'>
            <nav>
                 <a href='https://compassionate-sinoussi-4fbe79.netlify.app/'>Home</a>
                 <Link to={`/signin`}>
                    <span>  Log In</span>
                 </Link>
                 <Link to={`/`}>
                    <span>  Sign Up</span>
                 </Link>
                 <a href='https://compassionate-sinoussi-4fbe79.netlify.app/about.html'>About Us</a>
                 <a href='https://compassionate-sinoussi-4fbe79.netlify.app/contact.html'>Contact Us</a>
            </nav>
        </div>
    )
}
export default Nav