import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddEditUser />} />
          <Route path="/editUser/:id" element={<AddEditUser />} />
          <Route path="/userInfo/:id" element={<UserInfo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
