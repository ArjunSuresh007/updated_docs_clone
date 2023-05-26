import React from 'react'
import './Css_files/sidebar.css'
import {RxAvatar,RxDividerHorizontal} from 'react-icons/rx'
import {SiGooglelens,SiGooglekeep,SiGooglehangouts} from 'react-icons/si'
import {HiPlus} from 'react-icons/hi2'
import {CgGoogleTasks} from 'react-icons/cg'

function Sidebar() {
  return (
    <div className='sidebar-component'>
      <div className='side-avatar'>
      <RxAvatar size='2em' color='rgb(15, 157, 88)'/>
      </div>
      <div className='side-options'>
      <a href='https://lens.google/' className='sidebar-icons-item' target='_blank' rel='noreferrer'>
        <SiGooglelens size='1.25em' color='rgb(66,133,244)'/>
      </a>
      <a href='https://tasksboard.com/' target='_blank' rel='noreferrer' className='sidebar-icons-item'>
        <CgGoogleTasks size='1.25em' color='rgb(219, 68, 55)'/>
      </a>
      <a href='https://www.google.com/keep/' target='_blank' rel='noreferrer' className='sidebar-icons-item'>
        <SiGooglekeep size='1.25em' color='rgb(244, 160, 0)'/>
      </a>
      <a href='https://hangouts.google.com/' target='_blank' rel='noreferrer' className='sidebar-icons-item'>
        <SiGooglehangouts size='1.25em' color='rgb(15, 157, 88)'/>
      </a>  
      <RxDividerHorizontal size='2em' />
      <HiPlus size='1.2em' />
      </div>
      
    </div>
  )
}

export default Sidebar