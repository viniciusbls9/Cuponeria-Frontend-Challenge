import React from 'react';
import { Link } from 'react-router-dom';

import { DiscoverContent } from './styles';

export interface DiscoverProducts {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
}

interface DiscoverProductsProps {
    product: DiscoverProducts;
}


const Discover: React.FC<DiscoverProductsProps> = ({ product }) => {


    return (
        <>
            <DiscoverContent className="discover-content" bgContainer={product.id === 1 ? "rgba(200,118,118, 0.2)" : "rgba(63,127,203, 0.2)"}>
                <img src={product.image} alt="" />
                <div className="discover-title">
                    <h3>{product.title}</h3>
                    <Link to={`/single-product/${product.id}`} style={{backgroundColor: product.id === 1 ? '#EE797E' :  '#619CEB'}}>Shop</Link>
                    <p>{product.description}</p>
                </div>
            </DiscoverContent>
        </>
    );
}

export default Discover;