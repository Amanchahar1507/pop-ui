export default function Login() {
  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <input placeholder="Email address" />
      <input type="password" placeholder="Password" />

      <button className="disabled">Login</button>
    </div>
  );
}
