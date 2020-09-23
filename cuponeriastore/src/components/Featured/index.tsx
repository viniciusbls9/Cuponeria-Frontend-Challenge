import React from 'react';
import { Link } from 'react-router-dom';

import image3 from '../../assets/images/image3.png';


import { FeaturedContainer } from './styles';

const Featured: React.FC = () => {
    return (
        <>
            <h2>Featured</h2>
            <FeaturedContainer>
                <div className="card-container">
                    <div className="card-white">
                        <a>
                            <img src={image3} alt="" />
                            <div className="badge-price">
                                <span>R$ 15,99</span>
                            </div>
                        </a>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-white">
                        <img src={image3} alt="" />
                        <div className="badge-price">
                            <span>R$ 15,99</span>
                        </div>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-white">
                        <img src={image3} alt="" />
                        <div className="badge-price">
                            <span>R$ 15,99</span>
                        </div>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-white">
                        <img src={image3} alt="" />
                        <div className="badge-price">
                            <span>R$ 15,99</span>
                        </div>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-white">
                        <img src={image3} alt="" />
                        <div className="badge-price">
                            <span>R$ 15,99</span>
                        </div>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-white">
                        <img src={image3} alt="" />
                        <div className="badge-price">
                            <span>R$ 15,99</span>
                        </div>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-white">
                        <img src={image3} alt="" />
                        <div className="badge-price">
                            <span>R$ 15,99</span>
                        </div>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-white">
                        <img src={image3} alt="" />
                        <div className="badge-price">
                            <span>R$ 15,99</span>
                        </div>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-white">
                        <img src={image3} alt="" />
                        <div className="badge-price">
                            <span>R$ 15,99</span>
                        </div>
                    </div>
                    <div className="card-black">
                        <p>Mens Casual Slim Fit</p>
                    </div>
                </div>

                
            </FeaturedContainer>
        </>
    );
}

export default Featured;