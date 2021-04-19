import React from 'react'
import '../styles/cards.scss'
import Card from './Card'
import imageone from '../images/sun1.jpg'
import imagetwo from '../images/sun2.JPG'
import imagethree from '../images/sun3.jpg'
import imagefour from '../images/sun4.JPG'
import imagefive from '../images/sun5.JPG'
import imagesix from '../images/sun6.jpg'
import imageseven from '../images/sun7.jpg'
import imageeight from '../images/sun8.JPG'
import imagenine from '../images/sun9.JPG'
import imageten from '../images/sun10.JPG'

function Cards() {

 const commentsOne = [
 {
   
  user:'Timothy cleev',
  text:"Yoo that's cool!",
  id:1,

 },
 {
  
  user:'Simon fresh',
  text:'Niceeee!',
   id:2,
 },
];

const commentsTwo = [
 {
   
  user:'Blessing neo',
  text:'Cutiee pie',
  id:3,
  
 },
 {
   
  user:'Isaac nice',
  text:'I know this day would come',
  id:4,
  
 },
 ];

 const commentsThree = [
 { 
  user:'Jasmine Itz',
  text:'Did you see my name',
  id:5,
 },
 {
  
  user:'Veronica gwen',
  text:'My name is blessing',
   id:6,
  
 },
];


const commentsFour = [
 {
  user:'Orlando Flex',
  text:'The headies is here again',
   id:7,
  
 },
 {
   
  user:'Titus Mira',
  text:'The king is here naw',
  id:8,
  
 },
];

const commentsFive = [
 {
  user:'Wyclev don',
  text:'Oga the don of Lagos',
   id:9,
 },
 {
  
  user:'Vivian enoch',
  text:'We run the city bruh',
   id:10,
  
 },
];

const commentsSix = [
 {
  user:'Amor flez',
  text:'Man of the year again!',
  id:11,
  
 },
 {
   
  user:'Hero flank',
  text:'My gee from unset',
  id:12,
  
 },
 ];

 const commentsSeven = [
 {
 
  user:'Learnado bean',
  text:'Bros you fresh die',
    id:13,
  
 },
 {
 
  user:'Joseph dub',
  text:'Joining the host of angels',
    id:14,
  
 },
];
 return (
  <div classuser='cards'>
   
   <Card 
   accountName='Orlando Flex' 
   verifiedBorder={true} 
   image={imagefive} 
   comments={commentsFour} 
   likedByText='Solomon' 
   likedByNumber={87998} 
   hours={14}
   totalComments={456} 
   />

     <Card 
   accountName='Wyclev don' 
   verifiedBorder={false} 
   image={imagefour} 
   comments={commentsFive} 
   likedByText='Solomon' 
   likedByNumber={41} 
   hours={16} 
   totalComments={7} 
   />

     <Card 
   accountName='Isaac nice' 
   verifiedBorder={true} 
   image={imageone} 
   comments={ commentsTwo} 
   likedByText='Solomon' 
   likedByNumber={8} 
   hours={16} 
   totalComments={1000} 
   />

     <Card 
   accountName='Timothy cleev' 
   verifiedBorder={false} 
   image={imageten} 
   comments={commentsOne} 
   likedByText='Solomon' 
   likedByNumber={8000000} 
   hours={18} 
   totalComments={900} 
   />

     <Card 
   accountName='Learnado bean' 
   verifiedBorder={false} 
   image={imagenine} 
   comments={commentsSeven} 
   likedByText='Solomon' 
   likedByNumber={1000000} 
   hours={67} 
   totalComments={67} 
   />

     <Card 
   accountName='Learnado bean' 
   verifiedBorder={true} 
   image={imagethree} 
   comments={commentsSeven} 
   likedByText='Solomon' 
   likedByNumber={898} 
   hours={23}
   totalComments={1346}  
   />

     <Card 
   accountName='Amor flez' 
   verifiedBorder={true} 
   image={imagesix} 
   comments={ commentsSix} 
   likedByText='Solomon' 
   likedByNumber={81} 
   hours={61} 
   totalComments={2} 
   />

     <Card 
   accountName='Simon fresh' 
   verifiedBorder={false} 
   image={imageone} 
   comments={commentsOne} 
   likedByText='Solomon' 
   likedByNumber={1} 
   hours={23} 
   totalComments={0} 
   />

     <Card 
   accountName='Timothy cleev' 
   verifiedBorder={false} 
   image={imageseven} 
   comments={commentsOne} 
   likedByText='Solomon' 
   likedByNumber={67} 
   hours={6} 
   totalComments={953} 
   />

     <Card 
   accountName='Titus Mira' 
   verifiedBorder={true} 
   image={imagetwo} 
   comments={commentsFour} 
   likedByText='Solomon' 
   likedByNumber={19256} 
   hours={10} 
   totalComments={21} 
   />

  </div>
 )
}

export default Cards
