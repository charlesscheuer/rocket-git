import React from 'react';
import Mountain from './Mountain';
import Ourstory from './Ourstory';
import Abovefold from './Abovefold';
import Fleece from './Fleece';
import { Route, Link } from 'react-router-dom';

const Sourcepage = () => {
    return(
    <div>
        <Route path='/' exact component={Abovefold}/>
        <Route path='/Our-Story' exact component={Ourstory}/>
        <Route path='/Fleece' exact component={Fleece}/>
    {/*  {route === 'Abovefold' && <Abovefold ctaRouteChange={ctaRouteChange}/>}
        {route === 'Ourstory' && <Ourstory ctaRouteChange={ctaRouteChange}/>}
        {route === 'Fleece' && <Fleece className="rocketFleece" ctaRouteChange={ctaRouteChange}/>}
    */}
    </div>
    );
}

export default Sourcepage;