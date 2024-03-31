import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';
import appMiniLogo from '../../Images/appMiniLogo.png';
import homeLogo from '../../Images/homeLogo.png';
import emailContactsLogo from '../../Images/emailContactsLogo.png';
import emailLogo from '../../Images/emailLogo.png';
import sendLogo from '../../Images/sendLogo.png';
import viewListLogo from '../../Images/viewListLogo.png';
import notificationLogo from '../../Images/notificationLogo.png';
import barChartLogo from '../../Images/barChartLogo.png';

function SideNav() {
  return (
    <div className='sideNavMainCont'>

        <div className='sideNavLogoCont'>
            <img src={appMiniLogo} alt="appMiniLogo" />
        </div>

        <div className='sideNavMenuCont'>
            <div className='sideNavMenuContFlex'>
                <Link>
                    <img src={homeLogo} alt="homeLogo" />
                </Link>
                <Link>
                    <img src={emailContactsLogo} alt="emailContactsLogo" />
                </Link>
                <Link>
                    <img src={emailLogo} alt="emailLogo" />
                </Link>
                <Link>
                    <img src={sendLogo} alt="sendLogo" />
                </Link>
                <Link>
                    <img src={viewListLogo} alt="viewListLogo" />
                </Link>
                <Link>
                    <img src={notificationLogo} alt="notificationLogo" />
                </Link>
                <Link>
                    <img src={barChartLogo} alt="barChartLogo" />
                </Link>
            </div>
        </div>

        <div className='sideNavUserCont'>
            <div>PS</div>
        </div>
    </div>
  )
}

export default SideNav;