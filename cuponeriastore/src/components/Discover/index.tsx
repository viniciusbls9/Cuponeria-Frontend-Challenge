import React from 'react';
// import { Link } from 'react-router-dom';

import image1 from '../../assets/images/image1.png';

import { DiscoverContainer, DiscoverContent } from './styles';


const Discover: React.FC = () => {
    return (
        <>
            <DiscoverContainer>
                <DiscoverContent className="discover-content" bgContainer="rgba(200,118,118, 0.2)">
                    <img src={image1} alt="" />
                    <div className="discover-title">
                        <h3>Solid Gold Petite Micropave</h3>
                        <a href="#">Shop</a>
                        <p>Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.</p>
                    </div>

                </DiscoverContent>

                <DiscoverContent className="discover-content" bgContainer="rgba(200,118,118, 0.2)">
                    <img src={image1} alt="" />
                    <div className="discover-title">
                        <h3>Solid Gold Petite Micropave</h3>
                        <a href="#">Shop</a>
                        <p>Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.</p>
                    </div>
                </DiscoverContent>
            </DiscoverContainer>
        </>
    );
}

export default Discover;