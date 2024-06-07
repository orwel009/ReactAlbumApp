import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAlbum from './components/AddAlbum';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddAlbum/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
