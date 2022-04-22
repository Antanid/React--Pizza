import './scss/app.scss';

import { Header } from './components';
import {Home, Cart} from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {




  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
