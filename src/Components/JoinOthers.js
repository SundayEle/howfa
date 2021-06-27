import React, { useState } from 'react'
import '../styles/joinOthers.scss'
import EditIcon from '@material-ui/icons/Edit';
import Profile from './Profile'




function JoinOthers(props) {

  const {cardLocation} = props;
 return (
  <div className='joinothers'>
    
   <header>
     <h2>Join Others</h2>
      <EditIcon />
   </header>

    <div className="joinothers-body">
    
    <div className="profileicon_and_accountname">
    <Profile iconSize='medium' verifiedBorder={true} hideAccountName={false} />
    </div>

    <div className="profileicon_and_accountname">
    <Profile iconSize='medium' verifiedBorder={false} hideAccountName={false} />
    </div>

    <div className="profileicon_and_accountname">
    <Profile iconSize='medium' verifiedBorder={false} hideAccountName={false} />
    </div>

    <div className="profileicon_and_accountname">
    <Profile iconSize='medium' verifiedBorder={false} hideAccountName={false} />
    </div>

    <div className="profileicon_and_accountname">
    <Profile iconSize='medium' verifiedBorder={true} hideAccountName={false} />
    </div>

     <div className="profileicon_and_accountname">
    <Profile iconSize='medium' verifiedBorder={true} hideAccountName={false} />
    </div>
    <div className="cardLocation">{cardLocation}</div>

    <button className='btn'>join</button>
    <button className='btn'>join</button>
    <button className='btn'>join</button>
    <button className='btn'>join</button>
    <button className='btn'>join</button>
    <button className='btn'>join</button>
  
    <button  className='see_more_btn'>See More</button>
    
    </div>
  </div>
  
 )
}


export default JoinOthers
