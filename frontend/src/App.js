import './App.css';
import Read from './components/Read';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Update from './components/Update';
import Create from './components/Create';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/HomePage/Header';
import FooterHome from './components/HomePage/Footer';


function App() {
  return (
    <Router>
      <Route exact path='/'>
        <div className='main'>
          <Homepage />
        </div>
      </Route>
      <Route exact path='/motos-yamaha'>
        <div className='main'>
          <BasicExample />
          <div >
            <Read APIURL="http://localhost:5200/yamaha" />
          </div>
          <FooterHome/>
        </div>
      </Route>
      <Route exact path='/motos-honda'>
        <div className='main'>
          <BasicExample />
          <div >
            <Read APIURL="http://localhost:5200/honda" />
          </div>
          <FooterHome/>
        </div>
      </Route>
      <Route exact path='/motos-kawasaki'>
        <div className='main'>
          <BasicExample />
          <div >
            <Read APIURL="http://localhost:5200/kawasaki" />
          </div>
          <FooterHome/>
        </div>
      </Route>
      <Route exact path='/motos-suzuki'>
        <div className='main'>
          <BasicExample />
          <div >
            <Read APIURL="http://localhost:5200/suzuki" />
          </div>
          <FooterHome/>
        </div>
      </Route>
      <Route path='/update/:url'>
        <BasicExample/>
        <Update />
        <FooterHome/>
      </Route>
      <Route path='/create/:url'>
      <BasicExample/>
        <Create />
        <FooterHome/>
      </Route>
    </Router>
  );
}

export default App;
