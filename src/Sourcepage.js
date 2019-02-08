import React from 'react';
import Mountain from './Mountain';
import Ourstory from './Ourstory';
import Abovefold from './Abovefold';
import Fleece from './Fleece';

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