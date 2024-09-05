import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { findAllCategories } from '../../services/categoryService';
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from 'react-router-dom';
import { findProductById, updateProductById } from '../../services/productService';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productForm, setProductForm] = useState({ 
        nome: "",
        descricao: "",
        precoUnit: 0,
        img: "",
        codigoBarras: 0
    });

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        getCategories();
        getFindProductById();
    }, []);
    
    const getFindProductById = async () => {
        const response = await findProductById(id);
        setProductForm(response.data);
    }

    const getCategories = async () => {
        const response = await findAllCategories();
        console.log(response);
        const categoriesSelect = response.data.map((categoria) => {
            return{
                value: categoria._id,
                label: categoria.nome
            }
        })
        console.log(response.data);
        console.log(categoriesSelect);
        setCategories(categoriesSelect);
    }

    const handleChangeValues = (event) => {
        setProductForm({
            ...productForm,
            [event.target.name] : event.target.value
        });
        console.log(productForm);
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(productForm);
        const response = await updateProductById(id, productForm);
        if(response){
            alert('Produto alterado com sucesso!');
            navigate('/admin');
        }
    }

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-6'>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-2xl text-gray-600'>Edição de Produtos</h1>
        </div>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
            <div className='flex flex-col space-y-4'>
                <label htmlFor='nome' className='text-gray-500'>Nome</label>
                <input type='text' id='nome' value={productForm.nome} onChange={handleChangeValues} name='nome' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'/>
            
                <label htmlFor='descricao' className='text-gray-500'>Descrição</label>
                <textarea name='descricao' value={productForm.descricao} onChange={handleChangeValues} id='descricao' cols='30' rows='5' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'></textarea>
            
                <label htmlFor='codigoBarras' className='text-gray-500'>Código de Barras</label>
                <input type='text' value={productForm.codigoBarras} onChange={handleChangeValues} id='codigoBarras' name='codigoBarras' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'/>            
            </div>
            <div className='flex flex-col space-y-4'>
                <label htmlFor='precoUnit' className='text-gray-500'>Preço</label>
                <input type='text' id='precoUnit' value={productForm.precoUnit} onChange={handleChangeValues} name='precoUnit' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'/>                
                <label htmlFor='img' className='text-gray-500'>Imagem</label>
                <input type='text' id='img' value={productForm.img} onChange={handleChangeValues} name='img' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'/>

                <MultiSelect
                    options={categories}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />

                <div className='mt-8'>
                    <button type='submit' className='w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>Editar</button>
                </div>
            </div>
        </form>
    </section>
  )
}

export default EditProduct;