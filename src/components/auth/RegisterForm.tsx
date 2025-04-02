export default function RegisterForm() {
  return (
    <form className="flex flex-col">
      <label className="mb-2" htmlFor="username">
        Email
      </label>
      <input
        className="input-text mb-5"
        type="text"
        name="email"
        id="email"
        aria-required={true}
      ></input>
      <label className="mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="input-text mb-5"
        type="password"
        name="password"
        id="password"
        aria-required={true}
      ></input>
      <button aria-label="Login" className="mt-5 form-button">
        Register
      </button>
    </form>
  )
}
