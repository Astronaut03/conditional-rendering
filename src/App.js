// import { useState } from 'react';
// import './App.css';
// import User from './components/User/User';


// function App() {
//   const [familiar, setFamiliar] = useState(true);

//   return (
//     <div className="App">
//       <h2>Is Familiar:</h2>
//       <button onClick= {() => setFamiliar(!familiar)}>Toggle Friend</button>
//       <User familiar = {familiar}></User>
//     </div>
//   );
// }

// export default App;
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FriendDetail from './components/FriendDetail/FriendDetail';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/friend/:friendID">
          <FriendDetail></FriendDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;