import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import arrow from '../../assets/images/arrow.svg';

import { Menu } from './styles';

const HeaderSingleProduct: React.FC = () => {
    return (
        <Menu>
            <div className="header">
                <div className="header-content">
                    <div className="container-img">
                        <img src={logo} alt="Cuponeria" />
                    </div>
                    <div className="container-title">
                        <h1>Cuponeria Store</h1>
                    </div>
                </div>
            </div>

            <div className="header-buttons">
                <Link to="/" className="header-button">
                    <img src={arrow} alt="Cuponeria" />
                    Home
                </Link>
            </div>
        </Menu>
    );
}

export default HeaderSingleProduct;