import React from 'react'
import '../styles/home.scss'
import "../Components/FontawesomIcons";
import Header from "../Components/Header"
import BottomHeader from "../Components/BottomHeader"
import PostBox from "../Components/PostBox"
import Cards from "../Components/Cards"
import Sidebar from "../Components/Sidebar"
import SecondSidebar from "../Components/SecondSidebar"

function Home() {
 return (
  <div className='home'>
     <Header />
      <BottomHeader />
      <main>
        <div className="container">
          <PostBox />
          <SecondSidebar/>
          <Cards />
          <Sidebar />
        </div>
      </main>
  </div>
 )
}

export default Home
