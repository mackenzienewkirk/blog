import React from 'react';
import './InfoPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h1>Kenzie Newkirk</h1>
      <h3>| Software Engineer | Photographer | Chef | Musician | Customer Service | Digital Design |</h3>
    </div>
  );
}

export default InfoPage;
