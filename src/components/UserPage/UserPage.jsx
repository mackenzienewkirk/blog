import React from 'react';
import {useSelector} from 'react-redux';
import { Card, colors } from '@mui/material';
import RecipeReviewCard from '../BlogItem/BlogItem';

function UserPage() {


  
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <div>
        <h2>Posts</h2>
      </div>
      <RecipeReviewCard></RecipeReviewCard>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
