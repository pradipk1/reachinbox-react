import React from 'react'
import './TopNav.css';
import darkDiskLogo from '../../Images/darkDiskLogo.png';
import lightModeLogo from '../../Images/lightModeLogo.png';
import downArrow from '../../Images/downArrow.png';

function TopNav() {
  return (
    <div className='topNavMainCont'>
        <div className='topNavTitleCont'><p>Onebox</p></div>

        <div className='topNavRightCont'>
            <div className='lightModeToggleBtn'>
                <img src={darkDiskLogo} alt="darkDiskLogo" />
                <img src={lightModeLogo} alt="lightModeLogo" />
            </div>

            <div className='workSpaceSelectCont'>
                <p>Tim's Workspace</p>
                <img src={downArrow} alt="downArrow" />
            </div>
        </div>
    </div>
  )
}

export default TopNav;