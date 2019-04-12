import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () =>{
    return(
        <div >
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;
