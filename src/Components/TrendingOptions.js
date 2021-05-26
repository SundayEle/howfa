import React from 'react'
import "../styles/trendingOptions.scss"

function TrendingOptions(props) {
  const {
   text,
   Icon
  } = props;
 return (
  <div className='trending-options'>
   <Icon />
   <h2>{text}</h2>
  </div>
 )
}

export default TrendingOptions
