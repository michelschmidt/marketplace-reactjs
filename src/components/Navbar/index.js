import React, { useContext } from 'react'
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const { userLogged, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  //console.log(`Valor do contexto`, userLogged);
  
  return (
    <header className='bg-transparent z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
            <div className='flex flex-grow items-center'>
                <img src={logo} alt="Logo" className='w-36 cursor-pointer' />
                <h1 className='text-center text-3xl font-semibold text-gray-700'>Food App</h1>
            </div>
            {userLogged ? 
              <div className='flex items-center justify-end space-x-4'>
                <div className='relative flex cursor-pointer'>
                    <span className='bg-primary w-4 h-4 rounded-full p-1 flex items-center justify-center text-white absolute -right-2 -top-2'>2</span>
                    <BsFillCartFill className='w-6 h-6 cursor-pointer'/>
                </div>  
                <img src='' alt=''/>
                <p className='text-gray-700'>Bem Vindo, Nome Usuário!</p>
                <MdOutlineLogout className='w-6 h-6 cursor-pointer' onClick={logoutUser}/>
              </div>  
             : 
              <div className='flex items-center justify-end space-x-6'>
                <button onClick={() => navigate('/login')}>Login</button>
                <button className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Register</button>
              </div>
             }            
        </nav>
    </header>
  )
}

export default Navbar;