import React from 'react'
import '../styles/header.scss'
import logo from '../images/HOWFA.png'
import imageone from '../images/sun3.jpg'
import searchIcon from '../images/searchIcon.png'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#c27c22',
    color: '#c27c22',
    marginRight:'4px',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: '-1px',
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 2.5s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.5)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:'-3px',
    marginRight:'20px',
    '& > *': {
      margin: theme.spacing(-0.1),
    },
  },
}));

 function BadgeAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt="Profile photo" src={imageone} />
      </StyledBadge>
      <Badge>
      </Badge>
    </div>
  );
}


function Header() {

 return (
  <div className='header'>
   <div className="container">
    <img className='logo' src={logo} alt="howfa logo"/>
    <div className="search">
     <img className='searchIcon' src={searchIcon} alt="search icon"/>
     <input type="text" placeholder='Search on Howfa'/>
    </div>
      <BadgeAvatars />
   </div>
  </div>
 )
}

export default Header
