import React from 'react';
import {useSelector} from 'react-redux';
import { Card, colors, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import RecipeReviewCard from '../BlogItem/BlogItem';
import { blue } from '@mui/material/colors';

function UserPage() {

  const history = useHistory();
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h1>Mackenzie Newkirk</h1>
      <h2>Photography, Cinematography, and Music</h2>
      <div>
        <Button>Post</Button>
      </div>
      <div>
        <Button>Delete</Button>
      </div>
      <RecipeReviewCard></RecipeReviewCard>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
