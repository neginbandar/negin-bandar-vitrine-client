import "./SignInPage.scss";

export default function SignInPage() {
  return (
    <main class="form-signin w-100 m-auto">
      <form>
        <h1>Please sign in</h1>
        <h4> Choose your account type</h4>
        <div className="toggle-button">
          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option5"
            autocomplete="off"
            checked
          />
          <label class="btn" for="option5">
            Creator
          </label>

          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option6"
            autocomplete="off"
          />
          <label class="btn" for="option6">
            Shopper
          </label>
        </div>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check text-start my-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
}
