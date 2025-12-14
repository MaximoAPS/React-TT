import './navbar.css';
import { ListH } from './ListH';
import { useAuthContext } from '../context/AuthContext.jsx';

export const Navbar = () => {
    
    const { usuario, logout } = useAuthContext();

    return (
        <nav>
            {!usuario ? <ListH items={[
                { id: 1, to: '/', name: 'Home' }, 
                { id: 2, to: '/register', name: 'Register' },
                { id: 3, to: '/login', name: 'Login' },
                ]} /> : <ListH items={[
                    { id: 1, to: '/', name: 'Home' },
                    { id: 2, to: '/formProduct', name: 'Form Product' },
                ]} />}
            {usuario ? <button onClick={logout} className="logout">Logout</button> : null}
        </nav>
    )
}

