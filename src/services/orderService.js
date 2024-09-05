import api from './api';

const sendCart = (cartInfo) =>
    api.post('/carts/create', cartInfo)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));

const addOrder = (order) =>
    api.post('/orders/create', order)
    .then((response) => response)
    .catch((err) => console.log('Erro na chamada ', err ));

export { sendCart, addOrder };