import Profile from './Profile'
import React from 'react'
import '../styles/postBox.scss'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import MusicVideoOutlinedIcon from '@material-ui/icons/MusicVideoOutlined';


function PostBox() {
 const handleSubmit = (e) => {
  e.preventDefault();
 }

 return (
  <div className='postbox'>
   <div className="insidePostBox">
   <Profile iconSize='small' verifiedBorder={false} hideAccountName={true}/>
   <form>
    <input
    className='postBox_input'
    placeholder={`Howfa?`}/>
    <button onClick={handleSubmit} type='submit'>
     Hidden submit
    </button>
    <div className='postbox_icons'>
    <AddAPhotoOutlinedIcon />
    <OndemandVideoOutlinedIcon />
    <MusicVideoOutlinedIcon/>
    </div>
   </form>
  </div>
  </div>
 )
}

export default PostBox
