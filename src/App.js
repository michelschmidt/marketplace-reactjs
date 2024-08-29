import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login/index';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>  
            }/>  
          <Route path='/login' element={<Login/>}/>  
        </Routes>
      </AuthProvider>     
    </>
  );
}

export default App;
