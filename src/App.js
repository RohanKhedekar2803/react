import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import DisplayOne from './Componnents/DisplayOne';
import Landpage from './Componnents/Landpage';
import Navbar from './Componnents/Navbar';
import Form from './Componnents/Form';

function App() {
  return (
    <>
        <Navbar />
          <BrowserRouter>

              <Routes>
                 
                 <Route path="/" element={<Landpage />} />
                 <Route path='/show/:id' element={<DisplayOne />} />
                 <Route path='/form' element={<Form/>} />
              </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
