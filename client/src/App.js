import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx';
import Home  from './components/Home.jsx';
import CountryId from "./components/CountryId.jsx";
import Activities from './components/Activities.jsx';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/home" component={Home}/>
    <Route exact path="/countries/:id" component={CountryId} />
     <Route path ="/activities"component={Activities} />
     {/* <Route path ="/activities/createActivity"component={NewActivity} /> */}
      {/* <h1>Henry Countries</h1> */}
  
      </Switch>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
