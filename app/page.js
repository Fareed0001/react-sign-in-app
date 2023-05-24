import "../public/styles.css";

function home() {
  return <div className="container">
    <div className="row">
      <div className="col-5 first-col">
        <p className="first-header">Social media shared today, tomorrow <br /> or by location</p>
        <img className="first-img" src={"../images/phone.png"} alt="phone-img" />
        <img className="first-img0" src={"../images/ellipse.png"} alt="ellipse-img" />
      </div>
      <div className="col-7 second-col">
        <img className="logo-img" src="images\logo.png" alt="logo" />
        <p className="second-header">Create account <span className="second-sub-header">htmlFor business, band or
          celebrity</span></p>

        <form action="" method="post" className="row g-2 needs-validation form">
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">First name</label>
            <input type="text" className="form-control" id="validationCustom01" required></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationCustom02" required></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">Email</label>
            <input type="email" className="form-control" id="validationCustom03" required></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" className="form-control" id="date" required></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" required></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
            <input type="password" className="form-control" id="confirmPassword" required></input>
          </div>

          <div className="col-12">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember Me
            </label>
            <a className="forgot-password" href="">forgot password?</a>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
              <label className="form-check-label" htmlFor="invalidCheck">
                I agree to the <a className="terms-link" href="">terms</a> and <a className="terms-link"
                  href="">conditions</a>
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-md-6 d-grid">
            <button className="btn btn-primary login-button" type="submit">Create account</button>
          </div>
          <div className="col-md-6 d-grid">
            <button className="btn btn-dark login-button" type="button"><img className="google-g" src="images\google-G.png" alt="" /> Sign-in with google</button>
          </div>
          <p className="no-account">Dont have an account? <a className="no-account-link" href="">Log in</a></p>
        </form>
        <div className="download-buttons">
          <button className="google-button"></button>
          <button className="apple-button"></button>
        </div>
      </div>
    </div>
  </div>

}

export default home;