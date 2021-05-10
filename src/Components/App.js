import '../styles/App.scss';
import '../Components/FontawesomIcons';
import Login from './Login'
import Header from './Header'
import PostBox from './PostBox'
import Cards from './Cards'
import Sidebar from './Sidebar'
import SecondSidebar from './SecondSidebar'
import Logout from './Logout' 
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux'



function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user 
      ?
      <>
      <Header />
      <Logout />
      <main>
        <div className="container">
          <PostBox />
          <SecondSidebar/>
          <Cards />
          <Sidebar />
        </div>
      </main>
       </>
       :
      <Login /> 
       }
    </div>
  );
}

export default App;
