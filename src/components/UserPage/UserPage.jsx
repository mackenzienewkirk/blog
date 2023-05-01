import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Card, colors } from '@mui/material';

function UserPage() {


  
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <Card >
      <h1>POST</h1>
      </Card>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
