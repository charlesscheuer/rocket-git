import React from 'react';
import EmailIcon from '../EmailIcon';
import FacebookIcon from '../FacebookIcon';
import TwitterIcon from '../TwitterIcon';

export default function Success(props) {
  const { goBack } = props;
  return (
    <div>
      <p className="ctr__confirm">
        Thanks! We will let you know if we get enough interest to launch, in the
        meantime please share with friends.
      </p>
      <div className="sharing">
        <a href="mailto:?&subject=Check out the Rocket Fleece!&body=Hey,%0A%0ACheck%20out%20this%20fleece%20I%20found%3A%0Alink%20goes%20here%0A">
          <EmailIcon />
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//charlesscheuer.github.io/rocket-git/%23/fleece">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/home?status=Check%20out%20this%20new%20non-profit%20fleece%20that%20is%20trying%20to%20restore%20Mongolian%20grasslands!%20link">
          <TwitterIcon />
        </a>
      </div>
      <button type="button" className="purchase" onClick={goBack}>
        Go back
      </button>
    </div>
  );
}
