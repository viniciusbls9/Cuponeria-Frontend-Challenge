import React from 'react';

import logo from '../../assets/images/logo.svg';
import { Menu } from './styles';

const Header: React.FC = () => {
    return (
        <Menu>
            <div className="header">
                <img src={logo} alt="Cuponeria" />
                <h1>Cuponeria Store</h1>
            </div>

            <div className="header-buttons">
                <div className="header-button">
                    <button>Home</button>
                </div>

                <div className="header-button">
                    <button>Home</button>
                </div>

                <div className="header-button">
                    <button>Home</button>
                </div>

                <div className="header-button">
                    <button>Home</button>
                </div>

                <div className="header-button">
                    <button>Home</button>
                </div>
            </div>
        </Menu>
    );
}

export default Header;