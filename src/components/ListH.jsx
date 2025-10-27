import './listH.css'
import { LinkButton } from './LinkButton';

// lista horizontal de items
export const ListH = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} className="item"><LinkButton to={item.to} text={item.name} /></li>
            ))}
        </ul>
    )
}