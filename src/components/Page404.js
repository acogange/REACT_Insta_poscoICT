import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';
import { User } from '../data/User';

const Page404 = () => {
    const navigate = useNavigate();
    const { users } = useContext(UserContext);
    useEffect(() => {
        const id = localStorage.getItem('id');
        const findUser = users.find((data) => data.id === Number(id));
        if (!findUser) {
            navigate('/login');
        } else {
            navigate('/');
        }
    }, []);
    return <></>;
};
export default Page404;
