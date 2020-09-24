import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from '../../assets/images/logo.svg';
import { Menu } from './styles';

interface Category {
    category: string;
}

interface Props {
    filterCategory: (value: string) => void;
  }

const Header: React.FC<Props> = ({ filterCategory }) => {

    const [categorys, setCategorys] = useState<string[]>([]); 

    useEffect(() => {
        axios.get<Category[]>('https://fakestoreapi.com/products')
            .then(response => {
                const categoryData = response.data.map(cat => cat.category);
                var newCategory = categoryData.filter((este, i) => categoryData.indexOf(este) === i);
                setCategorys(newCategory);
            });
    }, [filterCategory]);

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
                <div className="header-button">
                    <button>Home</button>
                </div>
                {categorys.map(cat => (
                    <div className="header-button" key={cat}>
                        <button onClick={() => filterCategory(cat)}>{cat}</button>
                    </div>
                ))}
            </div>
        </Menu>
    );
}

export default Header;