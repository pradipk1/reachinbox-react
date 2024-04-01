import React, { useContext } from 'react'
import './TopNav.css';
import darkDiskLogo from '../../Images/darkDiskLogo.png';
import lightModeLogo from '../../Images/lightModeLogo.png';
import downArrow from '../../Images/downArrow.png';
import myContext from '../../context/context';

import darkModeLogo from '../../DarkImages/darkModeLogo.png';
import lightDiskLogo from '../../DarkImages/lightDiskLogo.png';
import downArrowDark from '../../DarkImages/downArrowDark.png';

function TopNav() {
    const { dark, setDark } = useContext(myContext);

    const handleToggle = () => {
        console.log('clicked');
        setDark(!dark);
    }
  return (
    <div className={dark ? 'topNavMainCont' : 'topNavMainCont topNavMainCont-dark'}>
        <div className='topNavTitleCont'><p>Onebox</p></div>

        <div className='topNavRightCont'>
            <div className={dark ? 'lightModeToggleBtn' : 'lightModeToggleBtn lightModeToggleBtn-dark'} onClick={handleToggle}>
                <img src={dark ? darkDiskLogo : darkModeLogo} alt="darkDiskLogo" />
                <img src={dark ? lightModeLogo : lightDiskLogo} alt="lightModeLogo" />
            </div>

            <div className='workSpaceSelectCont'>
                <p>Tim's Workspace</p>
                <img src={dark ? downArrow : downArrowDark} alt="downArrow" />
            </div>
        </div>
    </div>
  )
}

export default TopNav;