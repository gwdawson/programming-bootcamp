import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Articles from './components/Articles';
import './styles/App.css';
import { useEffect, useState } from 'react';
import { getAllUsers } from './utils/api';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const makeAsync = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };
    makeAsync();
  }, []);

  return (
    <div className='App'>
      <Nav />
      {users.includes(user) && <h3 className='User'>Logged in as: {user.username}</h3>}
      {!users.includes(user) && (
        <button
          className='UserLoginButton'
          onClick={() => {
            setUser(users[Math.floor(Math.random() * users.length)]);
            setLoggedIn(true);
          }}
        >
          LOGIN
        </button>
      )}
      <Header />
      <Routes>
        <Route path='/' element={<Articles loggedIn={loggedIn} />}></Route>
        <Route path='/topics/:topic' element={<Articles loggedIn={loggedIn} />}></Route>
        <Route
          path='/articles/:article_id'
          element={<Articles loggedIn={loggedIn} user={user} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
