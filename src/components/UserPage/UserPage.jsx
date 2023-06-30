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
      <h1>Emma Murano</h1>
      <div>
        <h3>Gallery</h3>
        <Button>New Post</Button>
      </div>
      <RecipeReviewCard></RecipeReviewCard>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
