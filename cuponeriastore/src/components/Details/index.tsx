import React from 'react';
import { Link } from 'react-router-dom';

import { DiscoverContent } from './styles';

export interface ProductDetails {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
}

interface ProductDetailsProps {
    details: ProductDetails;
}

const Details: React.FC<ProductDetailsProps> = ({ details }) => {
    return (
        <DiscoverContent className="discover-content" bgContainer="rgba(200,118,118, 0.2)">
            <img src={details.image} alt="" />
            <div className="discover-title">
                <Link to="#">R$ {details.price.toLocaleString()}</Link>
                <h3>{details.title}</h3>
                <p>{details.description}</p>
            </div>
        </DiscoverContent>
    );
}

export default Details;