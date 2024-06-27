import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

    <>
    <nav>
        <ul className='Flex'>
            <li className='Logo'><img src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="UdemyLogo"/></li>
            <li>Categories</li>
            <li>
                <form className='Search_1' action="" method="post">
                    <button type="submit"><img src="/magnifying-glass.png" alt="Search" /></button>
                <input type="text" name="Search Bar" placeholder='Search for Anything' />
                </form>
            </li>
            <li>Plans & Pricing</li>
            <li>Udemy Buisness</li>
            <li>Teach On Udemy</li>
            <li><img id='Cart' src="/Iphone.jpg" alt="Cart" /></li>            
            <li><button className='Log_in' type="button">Log in</button></li>            
            <li><button className='Log_in Sign_up' type="button">Sign up</button></li>            
            <li><button id='Globe' type="button"><img src="/icons8-globe-50.png" alt="" /></button></li>            

        </ul>
    </nav>
    </>
  )
}

export default Navbar