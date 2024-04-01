import React from 'react';
import './EmptyContent.css';
import emptyContentImg from '../../Images/emptyContentImg.png';

function EmptyContent() {
  return (
    <div className='emptyContentMainCont'>
        <div className='emptyContentCont'>
            <div className='emptyContentImgCont'><img src={emptyContentImg} alt="emptyContentImg" /></div>
            <div className='emptyContentTextCont'>
                <h3>It’s the beginning of a legendary sales pipeline </h3>
                <p>When you have inbound E-mails <br /> you’ll see them here</p>
            </div>
        </div>
    </div>
  )
}

export default EmptyContent;