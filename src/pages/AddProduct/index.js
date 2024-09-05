import React, { useEffect, useState } from 'react'
import { findAllCategories } from '../../services/categoryService';
import { MultiSelect } from "react-multi-select-component";
import { addProductAPI } from '../../services/productService';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [productForm, setProductForm] = useState({        
        nome: "",
        descricao: "",
        precoUnit: 0,
        img: "",
        codigoBarras: 0,
        categorias: [{ _id: "66d71ebe3d2cfeadbdecfa0b"}],
    });

    useEffect(() => {
        getCategories();
    }, [])

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

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
        console.log('--------' + productForm);
        console.log('selected' + selected);
        const categoriesId = selected.map(category => {
            return{
                _id: category.value
            }
        })
        console.log('ID da Categoria: ' + categoriesId.value);
        const product = {
            ...productForm,
            categorias: categoriesId,
            precoUnit: parseInt(productForm.precoUnit),
            codigoBarras: parseInt(productForm.codigoBarras)
        }
        console.log(productForm);
        const response = await addProductAPI(product);
        if(response.data){
            alert(`Produto ${response.data.nome} cadastrado com sucesso!`);
            navigate('/admin');
        }
    }

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-6'>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-2xl text-gray-600'>Cadastro de Produtos</h1>
        </div>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
            <div className='flex flex-col space-y-4'>
                <label htmlFor='nome' className='text-gray-500'>Nome</label>
                <input type='text' id='nome' onChange={handleChangeValues} name='nome' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'/>
            
                <label htmlFor='descricao' className='text-gray-500'>Descrição</label>
                <textarea name='descricao' onChange={handleChangeValues} id='descricao' cols='30' rows='5' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'></textarea>
            
                <label htmlFor='codigoBarras' className='text-gray-500'>Código de Barras</label>
                <input type='text' onChange={handleChangeValues} id='codigoBarras' name='codigoBarras' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'/>            
            </div>
            <div className='flex flex-col space-y-4'>
                <label htmlFor='precoUnit' className='text-gray-500'>Preço</label>
                <input type='text' id='precoUnit' onChange={handleChangeValues} name='precoUnit' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'/>                
                <label htmlFor='img' className='text-gray-500'>Imagem</label>
                <input type='text' id='img' onChange={handleChangeValues} name='img' required className='w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'/>

                <MultiSelect
                    options={categories}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />

                <div className='mt-8'>
                    <button className='w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>Adicionar</button>
                </div>
            </div>
        </form>
    </section>
  )
}

export default AddProduct