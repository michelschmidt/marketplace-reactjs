import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {

    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const userInfo = localStorage.getItem('userInfo');
      if(userInfo){
        setUserLogged(true);
      }
      setLoading(false);
    }, []);

    const loginUser = async (inputValues) => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
        });
        //alert(`Usuario ${inputValues.email} logado com sucesso.`);
        const data = await response.json();
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify( data ));
        navigate('/');
        setUserLogged(true);
    }

    const logoutUser = () => {
      setUserLogged(false);
      localStorage.clear();
      navigate('/login');
    }

    return { userLogged, loading, loginUser, logoutUser };
}

export default useAuth;