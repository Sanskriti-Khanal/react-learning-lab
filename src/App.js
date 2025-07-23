import React from 'react';
import './App.css'

import ProfileCard from './components/ProfileCard';
// import todolist from './components/todolist';
import './index.css';


function App() {
    

  return (
    <div className="App">
      <ProfileCard
        name="Shrddha Sapkota"
        image=""
        bio="I'm a passionate web developer with a love for learning new tech. I enjoy building creative and responsive web apps."
        skills={["React.js", "Node.js", "MongoDB", "UI Design"]}
      />
    </div>
  );
};

export default App;
