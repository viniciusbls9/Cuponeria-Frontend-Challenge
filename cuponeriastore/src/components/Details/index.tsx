import React from 'react';
import image1 from '../../assets/images/image1.png';

import { DiscoverContainer, DiscoverContent } from './styles';

const Details: React.FC = () => {
    return (
        <DiscoverContainer>
            <DiscoverContent className="discover-content" bgContainer="rgba(200,118,118, 0.2)">
                <img src={image1} alt="" />
                <div className="discover-title">
                    <a href="#">R$ 29,99</a>
                    <h3>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</h3>
                    <p>Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)</p>
                </div>

            </DiscoverContent>
        </DiscoverContainer>
    );
}

export default Details;