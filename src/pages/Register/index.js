import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [inputValues, setInputValues] = useState({
        nome: '',
        email: '',
        senha: '',
        imagem: ''
    });

    const navigate = useNavigate();
    
    const handleChangeValues = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name] : event.target.value
        });
        console.log(inputValues);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await registerUser(inputValues);
        if(response.data){
            alert(`Usuário ${response.date.nome} cadastrado com sucesso!`);
            navigate('/login');
        }
    }

  return (
    <main className='h-screen w-full banner'>
        <div className='flex pt-20 flex-col items-center h-screen'>
            <img src={logo} alt='Logotipo do foodApp' className='w-52'/>
            <h1 className='text-2xl text-gray-600'>Cadastro de Usuário</h1>
            <form onSubmit={handleSubmit} className='bg-white w-96 mt-6 p-4 rounded-lg sha'>
                <div className='flex flex-col space-y-6'>
                    <input type='text' name='nome' placeholder='Digite seu Nome:' 
                    className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
                    onChange={handleChangeValues} />
                    <input type='email' name='email' placeholder='Digite seu E-mail:' 
                    className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
                    onChange={handleChangeValues} />
                    <input type='password' name='senha' placeholder='Digite a sua Senha:' 
                    className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
                    onChange={handleChangeValues} />
                    <input type='text' name='imagem' placeholder='Insira a Url da Imagem' 
                    className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
                    onChange={handleChangeValues} />
                    <button type='submit' className='w-full py-3 bg-primary text-white rounded-full transition duration-700 hover:scale-105'>
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    </main>
  )
}

export default Register;