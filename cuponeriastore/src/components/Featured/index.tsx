import React from 'react';
import { Link } from 'react-router-dom';

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
        <>
            {/* <Link to={`single-product/${featured.id}`}> */}
                <div className="card-container">
                    <div className="card-white">
                        <Link to={`single-product/${featured.id}`}>
                            <img src={featured.image} alt={featured.title} />
                            <div className="badge-price">
                                <span>{featured.price}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="card-black">
                        <p>{featured.title}</p>
                    </div>
                </div>
            {/* </Link> */}
        </>
    );
}

export default Featured;