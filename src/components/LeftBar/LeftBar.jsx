import React from 'react'
import SidebarItem from './SidebarItem';
import './sidebar.css';
import { dataOfsideBarItem } from '../../Data'
function LeftBar({ onClickDownload, onClickMenu }) {
    return (
        <div className='left-bar'>
            {dataOfsideBarItem.map(element =>
                (<SidebarItem onClickMenu={onClickMenu} key={element.id} name={element.name} content={element.content} />)
            )}
            <div className='download-btn'>
                <p onClick={() => onClickDownload()}>DOWNLOAD</p>
            </div>
        </div>
    )
}

export default LeftBar
