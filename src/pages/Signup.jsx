export default function Signup() {
  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <input placeholder="Full Name*" />
      <input placeholder="Phone number*" />
      <input placeholder="Email address*" />
      <input placeholder="Password*" />
      <input placeholder="Company name" />

      <div className="radio-group">
  <p>Are you an Agency?</p>

  <div className="radio-options">
    <label>
      <input type="radio" name="agency" />
      <span>Yes</span>
    </label>

    <label>
      <input type="radio" name="agency" />
      <span>No</span>
    </label>
  </div>
</div>

      <button className="primary">Create Account</button>
    </div>
  );
}
