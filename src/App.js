import './App.css';
import LogoutButton from './componets/LogoutButton';
import Profile from './componets/Profile';
import LoginButton from './componets/loginButton';
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated , isLoading} = useAuth0()
  
    if ( isLoading) return <h1>Loading...</h1>
    return (
    <div className="App">
      <h1> Aplication</h1>
      {
        isAuthenticated ? <LogoutButton/> : <LoginButton />
      }
      <Profile/>
      
    </div>
  );
}

export default App;
