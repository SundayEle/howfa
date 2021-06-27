import React from 'react'
import '../styles/cards.scss'
import Card from './Card'
import imageone from '../images/sun1.jpg'
import imagetwo from '../images/sun2.jpg'
import imagethree from '../images/sun3.jpg'
import imagefour from '../images/sun4.jpg'
import imagefive from '../images/sun5.jpg'
import imagesix from '../images/sun6.jpg'
import imageseven from '../images/sun7.jpg'
import imageeight from '../images/sun8.jpg'
import imagenine from '../images/sun9.jpg'
import imageten from '../images/sun10.jpg'
import videoOne from '../videos/vid1.mp4'

function Cards() {

 const commentsOne = [
 {
   
  user:'Timothy cleev',
  time:'2hrs ago',
  id:1,

 },
 {
  user:'Simon fresh',
  time:'6hrs ago',
   id:2,
 },
];

const commentsTwo = [
 {
   
  user:'Blessing neo',
  time:'1hr ago',
  id:3,
  
 },
 {
   
  user:'Isaac nice',
  time:'Just Now',
  id:4,
  
 },
 ];

 const commentsThree = [
 { 
  user:'Jasmine Itz',
  time:'5mins ago',
  id:5,
 },
 {
  
  user:'Veronica gwen',
  time:'50mins ago',
   id:6,
  
 },
];


const commentsFour = [
 {
  user:'Orlando Flex',
  time:'9hrs ago',
   id:7,
  
 },
 {
   
  user:'Titus Mira',
  time:'25mins ago',
  id:8,
  
 },
];

const commentsFive = [
 {
  user:'Wyclev don',
  time:'40mins ago',
   id:9,
 },
 {
  
  user:'Vivian enoch',
  time:'17hrs ago',
   id:10,
  
 },
];

const commentsSix = [
 {
  user:'Amor flez',
  time:'4hrs ago',
  id:11,
  
 },
 {
   
  user:'Hero flank',
  time:'2mins ago',
  id:12,
  
 },
 ];

 const commentsSeven = [
 {
 
  user:'Learnado bean',
  text:'Bros you fresh die 🤩🙌',
  time:' Just Now',
    id:13,
  
 },
 {
 
  user:'Joseph dub',
  time:'Just Now',
    id:14,
  
 },
];
 return (
  <div className='cards'>
   
   <Card 
   accountName='Orlando Flex' 
   location='London, England'
   verifiedBorder={false} 
   image={imagefive} 
   comments={commentsFour} 
   likedByText='Solomon' 
   likedByNumber={87998} 
  hours={14}
   date='21/04/19'
   totalComments={456} 
   />

     <Card 
   accountName='Wyclev don' 
   location='Heroa, Amsterdam'
   verifiedBorder={true} 
   image={imageeight} 
   comments={commentsFive} 
   likedByText='Solomon' 
   likedByNumber={41} 
  hours={16}
   date='01/12/19' 
   totalComments={7} 
   />

     <Card 
   accountName='Isaac nice' 
   location='Enugu, Nigeria'
   verifiedBorder={true} 
   video={videoOne} 
   comments={ commentsTwo} 
   likedByText='Solomon' 
   likedByNumber={8} 
   hours={16}
   date='11/09/17' 
   totalComments={1000} 
   />

     <Card 
   accountName='Timothy cleev' 
   location='Lagos, Nigeria'
   verifiedBorder={false} 
   image={imageten} 
   comments={commentsOne} 
   likedByText='Solomon' 
   likedByNumber={8000000} 
   hours={18}
   date='06/05/19' 
   totalComments={900} 
   />

     <Card 
   accountName='Learnado bean' 
   location='monica, Las Vegas'
   verifiedBorder={true} 
   image='null' 
   comments={commentsSeven} 
   likedByText='Solomon' 
   likedByNumber={1000000} 
  hours={67}
   date='12/10/20' 
   totalComments={67} 
   />

     <Card 
   accountName='Learnado bean' 
   location='santa, Califonia'
   verifiedBorder={false} 
   video={videoOne}  
   comments={commentsFour} 
   likedByText='Solomon' 
   likedByNumber={898} 
   hours={23}
   date='31/01/21'
   totalComments={1346}  
   />

     <Card 
   accountName='Amor flez' 
   location='cairo, Egypt'
   verifiedBorder={true} 
   image={imagesix} 
   comments={ commentsSix} 
   likedByText='Solomon' 
   likedByNumber={81} 
   hours={61}
   date='17/06/17' 
   totalComments={2} 
   />

     <Card 
   accountName='Simon fresh' 
   location='florida, Kenya'
   verifiedBorder={false} 
   image='null'
   comments={commentsSix} 
   likedByText='Solomon' 
   likedByNumber={1} 
   hours={23}
   date='22/08/19' 
   totalComments={0} 
   />

     <Card 
   accountName='Timothy cleev' 
   location='tiwa, Kigali'
   verifiedBorder={true} 
   image={imageseven} 
   comments={commentsOne} 
   likedByText='Solomon' 
   likedByNumber={67} 
   hours={6} 
   date='25/09/20'
   totalComments={953} 
   />

     <Card 
   accountName='Titus Mira' 
   location='jerus, Philipines'
   verifiedBorder={false} 
   video={videoOne}  
   comments={commentsFour} 
   likedByText='Solomon' 
   likedByNumber={19256} 
   hours={10}
   date='29/10/18' 
   totalComments={21} 
   />

  </div>
 )
}

export default Cards
