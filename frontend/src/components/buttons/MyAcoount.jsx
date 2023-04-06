
function handleSignup(event) {
    event.preventDefault(); //prevent default form submission
    const username = event.target.elements.username.value; //get the username from input field
    const email = event.target.elements.email.value; //get the email from input field
    const password = event.target.elements.password.value; //get the password from input field
    fetch('https://e-commerce-backend-nx4k.onrender.com/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  function handleLogin(event) {
    event.preventDefault(); //prevent default form submission
    const email = event.target.elements.emailLogin.value; //get the email from input field
    const password = event.target.elements.passwordLogin.value; //get the password from input field
    fetch('https://e-commerce-backend-nx4k.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  

function MyAccount()
{
    return(
    <>
        <div className="d-flex dropdown">  
            <button className="btn btn-light btn-sm font-weight-bold" id="dropdownMenu2" data-toggle="dropdown">
                <img src="assets/images/Web/profile_icon.svg" alt="account" className="px-2"/>
                My profile
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li data-toggle="modal" data-target="#loginModal" className="fa fa-sign-in btn py-3 px-4">&nbsp;&nbsp;Login</li>
                <li className="dropdown-divider"></li>
                <li data-toggle="modal" data-target="#signupModal" className="fa fa-user-plus btn py-3 px-4">&nbsp;&nbsp;Register</li>
            </ul>
        </div>
{/******************************************************************************************/}
        {/* Log-in */}
        <div className="modal fade border rounded position-absolute" id="loginModal" tabIndex="-1"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{height:"100vh"}}>
            <div className="modal-dialog w-100" role="document" style={{height:"100vh"}}>
                <div className="modal-content" style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.4)"}}>
                    <div className="modal-header pt-5 pl-5">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="close pr-5" data-dismiss="modal" aria-label="Close">&times;</button>
                    </div>

                    <div className="modal-body pt-5">  
                        <form className="w-75 ml-5" onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="emailLogin" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="passwordLogin"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" className="btn-3d btn-outline-primary w-100 mb-5 mt-1 border rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

{/*********************************************************************************/}
        {/* Sign-Up*/}  
        <div className="modal fade border rounded position-absolute" id="signupModal" tabIndex="-1" style={{height:"100vh"}}>
            <div className="modal-dialog w-100 justify-content-center" style={{height:"100vh"}}>
                <div className="modal-content"  style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.4)"}}>
                    <div className="modal-header  pt-5 pl-5">
                        <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
                        <button type="button" className="close pr-5" data-dismiss="modal" aria-label="Close">&times;</button>
                    </div>
                    <div className="modal-body pt-5">  
                        <form className="w-75 ml-5" onSubmit={handleSignup}>
                            <div className="mb-3">
                                <label htmlFor="signup-username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="signup-username" name="username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signup-email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="signup-email" name="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signup-password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="signup-password" name="password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I agree to the <b>Terms of Use</b></label>
                            </div>
                            <button type="submit" className="btn-3d btn-outline-primary w-100 mb-5 mt-1 border rounded">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default MyAccount;