import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const nav = [
        {
            name: 'Home',
            slug: '/home'
        },
        {
            name: "Contact",
            slug: '/contact'
        },
        {
            name: 'Feedback',
            slug: '/feedback'
        }
    ]
  return (
    <div>
        <ul>
        {nav.map( (item) => (
            <li key={item.name}>
                <Link to={item.slug}>
                    {`${item.name}`}
                </Link>

            </li>
         ))}
        </ul>
        
      
    </div>
  )
}

export default Header
