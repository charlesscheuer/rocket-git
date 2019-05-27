import React from 'react';

export default function Input(props) {
  const { counter, label, submit, emailChange } = props;
  return (
    <div>
      <h2>Join {counter} others that are ready for liftoff!</h2>
      <div className="ctr__email">
        <form action="#" className="form">
          <div className="form__group">
            <input
              type="email"
              onChange={emailChange}
              className="form__input"
              placeholder="Email address"
              id="email"
              required
            />
            <label htmlFor="email" className="form__label">
              {label}
            </label>
          </div>
        </form>
      </div>
      <button type="submit" className="purchase" onClick={submit}>
        Request Invite
      </button>
    </div>
  );
}
