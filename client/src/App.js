import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './SCSS/style.css'

import Login from './Components/Login';
import MainPage from './Components/MainPage'
//helper
import { history } from './helpers/history'
import { setAuthToken } from './helpers/setAuthToken';

import CheckToken from './helpers/CheckToken'

const token = localStorage.getItem("token");
if(token) {
  setAuthToken(token)
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes history={history}>
        <Route path="/" element={<Login />}/>
        <Route path="/mainpage" element={<CheckToken><MainPage /></CheckToken>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
