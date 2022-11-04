import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Landpage from './Componnents/Landpage';
import Navbar from './Componnents/Navbar';
function App() {
  return (
    <>
        <Navbar />
          <BrowserRouter>

              <Switch>
                 <Route path="/" ><Landpage /></Route>
              </Switch>
          </BrowserRouter>
    </>
  );
}

export default App;
