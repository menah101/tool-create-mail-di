import React from 'react'
import { FcAddImage } from 'react-icons/fc'
import './Sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__inner'>
        <ul className='sidebar__list'>
          <li className='sidebar__item'>
            <div className='sidebar__icon'>
              <FcAddImage size={40} className='sidebar__iconAddImage'/>
              <span>Image</span>
            </div>
          </li>
          <li className='sidebar__item'>
            <div className='sidebar__icon'>
            <FcAddImage size={40} className='sidebar__iconAddImage'/>
              <span>Image link</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar