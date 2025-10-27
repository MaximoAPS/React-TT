import './navbar.css';
import { ListH } from './ListH';
import { LinkButton } from './LinkButton';

export const Navbar = () => {
    return (
        <nav>
            <ListH items={[
                { id: 1, to: '/', name: 'Home' }, 
                { id: 2, to: '/register', name: 'Register' },
                { id: 3, to: '/login', name: 'Login' }
                ]} />
        </nav>
    )
}

