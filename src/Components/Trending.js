import React from 'react'
import '../styles/trending.scss'
import TrendingOptions from './TrendingOptions'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Trending() {
 return (
  <div className='trending'>
   
   <header>
    <h2>Trending</h2>
     <SettingsOutlinedIcon />
   </header>
   <div className="info">
      <TrendingOptions Icon={WhatshotIcon} text='#OlamideNeedsToFree'/>
      <TrendingOptions Icon={WhatshotIcon} text='#EndSars'/>
      <TrendingOptions Icon={WhatshotIcon} text='#NigeriaMustUnite'/>
      <TrendingOptions Icon={WhatshotIcon} text='#CalabarTrends'/>
      <TrendingOptions Icon={WhatshotIcon} text='#UnicrossNews'/>
      <TrendingOptions Icon={WhatshotIcon} text='#UnibenCrimes'/>
   </div>
   <button><ExpandMoreIcon /></button>
  </div>
 )
}

export default Trending
