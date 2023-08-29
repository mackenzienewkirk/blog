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
      <h4>Artistry and Innovation: The career of Mackenzie Newkirk</h4>
      <p>My name is Mackenzie Newkirk, or Kenzie if were friends. 
        I am a software engineer based out of the Twin Cities, MN. 
        Currently progressing through an immersive Full Stack Software Engineering course at Prime Digital Academy, and actively building coding projects to practice my skills. 
        I'm passionate about gaining technical and social skills to contribute creative, thorough ideas to my current projects and schooling. 
        I grew up in the 'Minnesconsin' area of the Midwest, and tour to new places when I can. 
        If I'm not coding, you can find me playing guitar or at the local movie theaters, coffee shops, and MN State Parks.</p>
        <p>I am comfortable with front end and back end work, and I am extremely passionate about well designed websities.
          Since my time at Prime Digital Academy, I have been working on skills in MaterialUI, CSS Tailwind, and Bootstrap.
          
        </p>
    </div>
  );
}

export default InfoPage;
