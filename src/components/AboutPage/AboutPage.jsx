import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>Contact</h1>
        <p>Please complete contact sheet below to reach out for more information.</p>
        <div>
          <p>Name:</p>
          
        </div>
        
      </div>
    </div>
  );
}

export default AboutPage;
