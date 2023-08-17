import { useCallback, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import { Logo } from '../Logo';
import { NavItem } from '../NavItem';

import './style.scss';

export const Header = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    const toggleBtnNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <div className="header">
            <div className="header-content">
                <Logo />
                <nav className="header-nav">
                    <AiOutlineClose
                        onClick={toggleBtnNav}
                        className={openNav ? 'cls_active nav-close' : 'nav-close'}
                    />
                    <ul className={openNav ? 'nav_active' : ''}>
                        <NavItem to="/" onClick={toggleBtnNav}>
                            Home
                        </NavItem>
                        <NavItem to="/formation" onClick={toggleBtnNav}>
                            Formation
                        </NavItem>
                        <NavItem to="/experience" onClick={toggleBtnNav}>
                            Experience
                        </NavItem>
                        <NavItem to="/contact" onClick={toggleBtnNav}>
                            Contact
                        </NavItem>
                    </ul>
                </nav>
                <div className='header-btn'>
                    <button onClick={toggleBtnNav} className="nav-btn">
                        <GiHamburgerMenu className="hamburger-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};