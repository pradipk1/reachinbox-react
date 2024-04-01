import React, { useContext } from 'react';
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
import myContext from '../../context/context';

import appMiniDarkLogo from '../../DarkImages/appMiniDarkLogo.png';
import homeDarkLogo from '../../DarkImages/homeDarkLogo.png';
import emailDarkLogo from '../../DarkImages/emailDarkLogo.png';
import sendDarkLogo from '../../DarkImages/sendDarkLogo.png';
import viewListDarkLogo from '../../DarkImages/viewListDarkLogo.png';
import notificationDarkLogo from '../../DarkImages/notificationDarkLogo.png';
import barChartDarkLogo from '../../DarkImages/barChartDarkLogo.png';

function SideNav() {
    const { dark } = useContext(myContext);
  return (
    <div className={dark ? 'sideNavMainCont' : 'sideNavMainCont sideNavMainCont-dark'}>

        <div className='sideNavLogoCont'>
            <img src={dark? appMiniLogo : appMiniDarkLogo} alt="appMiniLogo" />
        </div>

        <div className='sideNavMenuCont'>
            <div className='sideNavMenuContFlex'>
                <Link>
                    <img src={dark ? homeLogo : homeDarkLogo} alt="homeLogo" />
                </Link>
                <Link>
                    <img src={emailContactsLogo} alt="emailContactsLogo" />
                </Link>
                <Link>
                    <img src={dark ? emailLogo : emailDarkLogo} alt="emailLogo" />
                </Link>
                <Link>
                    <img src={dark ? sendLogo : sendDarkLogo} alt="sendLogo" />
                </Link>
                <Link>
                    <img src={dark ? viewListLogo : viewListDarkLogo} alt="viewListLogo" />
                </Link>
                <Link>
                    <img src={dark ? notificationLogo : notificationDarkLogo} alt="notificationLogo" />
                </Link>
                <Link>
                    <img src={dark ? barChartLogo : barChartDarkLogo} alt="barChartLogo" />
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