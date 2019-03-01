import React from 'react';
import Mountain from './ProductPage/Mountain';
import Ourstory from './Ourstory';
import Abovefold from './Home/Abovefold';
import Fleece from './ProductPage/Fleece';

const Sourcepage = ({route, ctaRouteChange}) => {
    return(
    <div>
        {route === 'Abovefold' && <Abovefold ctaRouteChange={ctaRouteChange}/>}
        {route === 'Ourstory' && <Ourstory ctaRouteChange={ctaRouteChange}/>}
        {route === 'Mountain' && <Mountain ctaRouteChange={ctaRouteChange}/>}
        {route === 'Fleece' && <Fleece className="rocketFleece" ctaRouteChange={ctaRouteChange}/>}
    </div>
    );
}

export default Sourcepage;