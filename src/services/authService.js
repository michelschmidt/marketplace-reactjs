import api from './api';

const loginUserApi = (userValues) => 
    api.post('/auth/login', userValues)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));

const registerUser = (addUserValues) => 
    api.post('/users/create', addUserValues)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));

const getUserById = (idUser) => 
    api.get(`/users/findById/${idUser}`)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));   

export { loginUserApi, registerUser, getUserById };