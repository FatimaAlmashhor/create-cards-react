import React from 'react'
import './nav.css'

const navigation = ({ onClickMenu, onClickDownload }) => {

    return (
        <div className='navigation'>
            <nav className='nav'>
                <div>LOGO</div>
                <div>
                    <p className='download' onClick={() => onClickDownload()}>DOWNLOAD</p>
                    <p className='menu' onClick={() => onClickMenu()}>Menu</p>
                </div>
            </nav>
        </div >
    )
}

export default navigation
