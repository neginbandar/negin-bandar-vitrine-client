import { useState } from "react";
import "./SignInPage.scss";

export default function SignInPage() {
  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1>Please sign in</h1>
        <h4> Choose your account type</h4>
        <div className="toggle-button">
          <input
            type="radio"
            className="btn-check"
            name="options-base"
            id="option5"
            autocomplete="off"
            checked
          />
          <label className="btn" for="option5">
            Creator
          </label>

          <input
            type="radio"
            className="btn-check"
            name="options-base"
            id="option6"
            autocomplete="off"
          />
          <label className="btn" for="option6">
            Shopper
          </label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Log in
        </button>
      </form>
    </main>
  );
}
