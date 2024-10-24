import { useState } from "react";

export default function LogInPage() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const findUser = async (user) => {
    try {
      const { data } = await axios.get(
        `${backendURL}:${port}/users/${username}`
      );
    } catch (error) {
      console.error("Error  fetching users", error);
    }
  };

  const isFormValid = () => {
    if (!username || !password) {
      return false;
    }
    if (!isUsernameValid()) {
      return false;
    }
    if (!isPasswordValid()) {
      return false;
    }

    console.log(username, password);
    return true;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const user = {
        username: username,
        password: password,
      };
      findUser(user);
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={loginHandler}>
        <h1>Log in</h1>
        <div className="form-floating">
          <input
            type="username"
            className="form-control"
            id="floatingInput"
            placeholder="negujs123"
            value={username}
            onChange={handleUsernameChange}
          />
          <label for="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
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
          Log in
        </button>
      </form>
    </main>
  );
}
