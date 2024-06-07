import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAlbum from './components/AddAlbum';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddAlbum/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
