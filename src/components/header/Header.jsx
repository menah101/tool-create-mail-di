import React from 'react'
import './Header.scss'
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__inner">
        <a href="/" className='header__logo'>
          <img src={Logo} alt="bitA" className='header__logoImg' />
          <span className='header__env'>Email</span>
        </a>
      </div>
    </header>
  )
}

export default Header