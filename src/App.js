import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login/index';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Register from './pages/Register';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductInfo from './pages/ProductInfo';
import Cart from './pages/Cart';
import Complete from './pages/Complete';

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
          <Route path='/product/:id' element={
            <ProtectedRoute>
              <ProductInfo/>
            </ProtectedRoute>
            }/> 
            <Route path='/cart' element={
              <ProtectedRoute>
                <Cart/>
              </ProtectedRoute>
            }/> 
          <Route path='/complete' element={
              <ProtectedRoute>
                <Complete/>
              </ProtectedRoute>
            }/>      
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/> 
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
            }/>  
          <Route path='/admin/add-product' element={
            <ProtectedRoute>
              <AddProduct/>
            </ProtectedRoute>
            }/>
            <Route path='/admin/edit-product/:id' element={
            <ProtectedRoute>
              <EditProduct/>
            </ProtectedRoute>
            }/>      
        </Routes>
        
      </AuthProvider>     
    </>
  );
}

export default App;
