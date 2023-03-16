import { Logo } from '../Logo';
import {Link} from 'react-router-dom'
import './style.scss'

export const Header = () => {
    return (
        <div className="header">
            <div className='header-content'>
                <Logo/>
                <nav className='header-nav'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/formation">Formation</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className='header-btn'>
                    <button className="theme-toggle">
                        toogle theme
                    </button>
                </div>
            </div>
        </div>
    )
}