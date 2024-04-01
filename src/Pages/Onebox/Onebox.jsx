import React, { useContext } from 'react';
import './Onebox.css';
import SideNav from '../../components/SideNav/SideNav';
import TopNav from '../../components/TopNav/TopNav';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import myContext from '../../context/context';

function Onebox() {

  const { dark } = useContext(myContext);

  return (
    <div className={dark ? 'oneboxMainCont' : 'oneboxMainCont oneboxMainCont-light'}>
      <SideNav />
      <TopNav />
      <EmptyContent />
    </div>
  )
}

export default Onebox;