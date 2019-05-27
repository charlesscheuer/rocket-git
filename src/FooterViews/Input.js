import React from 'react';

export default function Input(props) {
  const { label, submit, emailChange } = props;
  return (
    <div className="subscribe">
      <form action="#" className="form">
        <div className="form__group">
          <h1 className="thanking">Get notified when the rocket launches:</h1>

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
      <button type="button" className="subscribeSubmit" onClick={submit}>
        Submit
      </button>
    </div>
  );
}
