import React, { Component } from 'react';
import {
  HashRouter,
  BrowserRouter,
  Route,
} from 'react-router-dom';
import '../App.css';
//Components
import Header from './Header';
import Migos from './Migos';
import Albums from './Albums';
import Tours from './Tours';
//images
import review1 from '../images/big-sean.jpg';
import review2 from '../images/drake.jpg';
import review3 from '../images/quavo.jpg';
import review4 from '../images/2-chainz.jpg';
import review5 from '../images/Kendrick.jpg';
import review6 from '../images/chris.jpg';
// Vars
let REVIEWS = [
  {
    name: "Big Sean",
    text: "That's Album - Dope",
    img: review1,
  },
  {
    name: "Drake",
    text: "This shit poppin'",
    img: review2,
  },
  {
    name: "Quavo",
    text: "That was alot of work",
    img: review3,
  },
  {
    name: "2-Chainz",
    text: "I like this new school",
    img: review4,
  },
  {
    name: "Kendrick Lamar",
    text: "Lyrics shit, beat is dope tho",
    img: review5,
  },
  {
    name: "Chris Brown",
    text: "I'll listen this on parties",
    img: review6,
  }
]

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container-fluid p-0">

          <Header/>

          <div className="container">
            <Route exact path="/" component={Migos}/>
          </div>

          <Route path="/tours" component={Tours}/>

          <Route path="/albums" render={() => <Albums reviews={REVIEWS}/>}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
