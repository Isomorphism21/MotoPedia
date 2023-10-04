import './App.css';
import Read from './components/Read';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <Route exact path='/motos-yamaha'>
        <div className='main'>
          <h2 className='main-header'>Informacion Motos Yamaha</h2>
          <div style={{marginTop:20}}>
                <Read APIURL="http://localhost:5200/yamaha"/>
          </div>  
        </div>
      </Route>
      <Route exact path='/motos-honda'>
        <div className='main'>
          <h2 className='main-header'>Informacion Motos Honda</h2>
          <div style={{marginTop:20}}>
                <Read APIURL="http://localhost:5200/honda"/>
          </div>  
        </div>
      </Route>
      <Route exact path='/motos-kawasaki'>
        <div className='main'>
          <h2 className='main-header'>Informacion Motos Kawasaki</h2>
          <div style={{marginTop:20}}>
                <Read APIURL="http://localhost:5200/kawasaki"/>
          </div>  
        </div>
      </Route>
      <Route exact path='/motos-suzuki'>
        <div className='main'>
          <h2 className='main-header'>Informacion Motos Suzuki</h2>
          <div style={{marginTop:20}}>
                <Read APIURL="http://localhost:5200/suzuki"/>
          </div>  
        </div>
      </Route>
      <Route path='/update/:url'>
        <Update />
      </Route>
    </Router>
  );
}

export default App;
