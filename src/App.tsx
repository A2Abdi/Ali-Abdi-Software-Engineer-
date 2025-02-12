import React from 'react';
import Header from './Components/Header';
import Profile from "./Components/Profile";
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './Styles/base.css';
import './Styles/main.css';
import './Styles/normalize.css';
import './Styles/font-icons.css';

const App = () =>{

  return (

    <div className="App">
      
        <main className= "body-web">
        
          <Header></Header>
          
          <Profile></Profile>
          
          <Projects></Projects>
          
          <Contact></Contact>

      </main>

        
    </div>
  );
}

export default App;
