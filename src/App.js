import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import myContext from './context/context';
import GetToken from './components/GetToken/GetToken';
import Onebox from './Pages/Onebox/Onebox';

function App() {
  const [dark, setDark] = useState(true);
  const [token, setToken] = useState(null);

  return (
    <div className={dark ? 'appDark' : 'appLight'}>

      <myContext.Provider value={{dark, setDark, setToken}}>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path="/auth" element={<GetToken />}/>
          <Route path='/google-login' element={<Onebox />}/>
        </Routes>
      </myContext.Provider>
      
    </div>
  );
}

export default App;
