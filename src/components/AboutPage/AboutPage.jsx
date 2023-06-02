import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>Emma Murano is a midwest queen with a story to tell.</h1>
        <p> A mother of two, a daughter, an intellectual, and a beautiful soul.</p>
        
      </div>
    </div>
  );
}

export default AboutPage;
