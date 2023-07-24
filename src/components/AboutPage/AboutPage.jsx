import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>THis will act as a blog for my photography and short films.</h1>
        <p> I will be posting my pictures, videos, ideas, and completed projects here.</p>
        
      </div>
    </div>
  );
}

export default AboutPage;
