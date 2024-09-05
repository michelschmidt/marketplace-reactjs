import api from './api';

const findAllCategories = () =>    
    api.get('/categories/findAll')
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));

export { findAllCategories }