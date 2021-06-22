import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/inline'>INLINE</Link></li>
            <li><Link to='/modules'>MODULES</Link></li>
            <li><Link to='/styled-components'>STYLED-COMPONENTS</Link></li>
            <li><Link to='/linaria'>LINARIA</Link></li>
        </ul>
    )
}

export default Navbar
