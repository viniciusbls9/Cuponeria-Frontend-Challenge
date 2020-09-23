import React from 'react';
import { Link } from 'react-router-dom';

import image3 from '../../assets/images/image3.png';

export interface FeaturedProducts {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
}

interface FeaturedProductsProps {
    featured: FeaturedProducts;
}

const Featured: React.FC<FeaturedProductsProps> = ({ featured }) => {
    return (
        // <FeaturedContainer>
            <div className="card-container">
                <div className="card-white">
                    <a>
                        <img src={featured.image} alt={featured.title} />
                        <div className="badge-price">
                            <span>{featured.price}</span>
                        </div>
                    </a>
                </div>
                <div className="card-black">
                    <p>{featured.title}</p>
                </div>
            </div>
        // </FeaturedContainer>
    );
}

export default Featured;