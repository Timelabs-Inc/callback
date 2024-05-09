import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Redirector = () => {
  const location = useLocation();
  const [comment, setComment] = useState('Redirect to App👇');

  const handleRedirect = () => {
    const searchParams = new URLSearchParams(location.search);
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      const redirectUrl = `timelabstracker://?accessToken=${accessToken}&refreshToken=${refreshToken}`;
      window.location.href = redirectUrl;
      setComment('Success to get tokens.');
    } else {
      console.error('Tokens are missing!');
      setComment('Fail to get tokens.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20%' }}>
      <h1>{comment}</h1>
      <button onClick={handleRedirect} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Redirect to App
      </button>
    </div>
  );
};

export default Redirector;