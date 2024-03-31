import React, { useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import myContext from '../../context/context';

function GetToken() {
  const [searchParam, setSearchParam] = useSearchParams();
  // console.log(searchParam.get("token"));

  const { setToken } = useContext(myContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParam.get('token');
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
    navigate('/google-login');
  }, []);

  return (
    <div style={{height: '100vh', padding: '50px 20px', textAlign: 'center'}}>
      <h2>Redirecting to your Onebox ...</h2>
    </div>
  )
}

export default GetToken;