import '../styles/App.scss';
import StickyBox from "react-sticky-box";
import Header from './Header'
import PostBox from './PostBox'
import Cards from './Cards'
import Sidebar from './Sidebar'
import SidebarProfile from './SidebarProfile'
import Trending from './Trending'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <PostBox />
          <Cards />
          <Sidebar />
          <StickyBox offsetTop={10} offsetBottom={10}>
             <SidebarProfile />
             <Trending />
          </StickyBox>
        </div>
      </main>
    </div>
  );
}

export default App;
