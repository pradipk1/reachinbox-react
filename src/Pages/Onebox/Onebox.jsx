import React from 'react';
import './Onebox.css';
import SideNav from '../../components/SideNav/SideNav';
import TopNav from '../../components/TopNav/TopNav';
import EmptyContent from '../../components/EmptyContent/EmptyContent';

function Onebox() {
  return (
    <div className='oneboxMainCont'>
      <SideNav />
      <TopNav />
      <EmptyContent />
    </div>
  )
}

export default Onebox;