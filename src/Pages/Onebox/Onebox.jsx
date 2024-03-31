import React from 'react';
import './Onebox.css';
import SideNav from '../../components/SideNav/SideNav';
import TopNav from '../../components/TopNav/TopNav';

function Onebox() {
  return (
    <div className='oneboxMainCont'>
      <SideNav />
      <TopNav />
    </div>
  )
}

export default Onebox;