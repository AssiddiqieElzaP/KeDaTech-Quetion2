import React from 'react'
import '../../asset/css/style.css'
import Logo from '../../asset/gambar/Logo.png'
import { NavItem } from './NavItem'
import { Link } from 'react-router-dom'


function navbar() {
  return (
    <>
    <header>
        <div class="logo"><img src={Logo} alt=""/></div>
        
        <div class="button-nav"><a href="2.Register.html"><button>LOGIN</button></a></div>
        <div class="menu-toggle">
            <i class="fa fa-bars"></i>
        </div>
        
        <nav>
            <ul>
                {NavItem.map((item,index) =>{
                    return (
                        <li key={index}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
                <div class="button-navbar"><a href="2.Register.html"><button>LOGIN</button></a></div>
            </ul>
        </nav>
        
    </header>
    </>
  )
}

export default navbar
