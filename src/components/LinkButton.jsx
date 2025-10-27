import './linkButton.css';
import { Link } from 'react-router';

export const LinkButton = ({ to, text }) => {
    return (
        <Link to={to} className="linkButton">
            {text}
        </Link>
    )
}
