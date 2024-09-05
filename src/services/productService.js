import api from './api';

const addProductAPI = (product) =>
    api.post('/products/create', product)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));

const findAllProducts = (product) =>
    api.get('/products/findAll')
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));   
    
const findProductById = (id) =>
    api.get(`/products/findById/${id}`)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));  
    
const updateProductById = (id, productEdit) =>
    api.put(`/products/update/${id}`, productEdit)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));  
 
const deleteProduct = (id) =>
    api.delete(`/products/delete/${id}`)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));     

    

export { addProductAPI, findAllProducts, findProductById, updateProductById, deleteProduct };