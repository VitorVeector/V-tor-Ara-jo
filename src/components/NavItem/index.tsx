import { Link, useLocation } from "react-router-dom";
import { NavItemProps } from "../../interfaces/NavItemProps";


export const NavItem: React.FC<NavItemProps> = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} onClick={onClick}>
                {children}
            </Link>
        </li>
    );
};