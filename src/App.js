import logo from './logo.svg';
import './App.css';
import Home from './router/Home'
import Detail from './router/Detail';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='background'>
      <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
            <Route path={`${process.env.PUBLIC_URL}/detail/:id`} element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
