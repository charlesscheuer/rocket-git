import React from 'react';

const email = 'charlesfscheuer@gmail.com';

export default function Error(props) {
  const { goBack } = props;
  return (
    <div>
      <p className="ctr__confirm">
        Sorry, we were unable to process your email due to an error. If you keep
        getting this issue, please <a href={`mailto:${email}`}>contact us</a>
      </p>
      <button type="button" className="purchase" onClick={goBack}>
        Go back
      </button>
    </div>
  );
}
