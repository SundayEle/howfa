import "../styles/App.scss";
import "../Components/FontawesomIcons";
import Home from '../pages/Home'
import Login from "./Login"
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux"



function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
        {user 
      ? 
      <Home />
        : 
      <Login />  
        
      }
  
    </div>
  );
}

export default App;
