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
                        <div className="d-flex justify-content-center">
                            <button className="btn-3d btn-danger w-75 mb-4">
                                <span className="fa fa-google mr-2"></span> Sign in With Google
                            </button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn-3d btn-primary w-75 mb-4">
                                <span className="fa fa-facebook mr-2"></span> Sign in With Facebook
                            </button>
                        </div>    
                        <form className="w-75 ml-5">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
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
                        <div className="d-flex justify-content-center">
                            <button className="btn-3d btn-danger w-75 mb-4">
                                <span className="fa fa-google mr-2"></span> Signup With Google
                            </button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn-3d  btn-primary w-75 mb-4">
                                <span className="fa fa-facebook mr-2"></span> Signup With Facebook
                            </button>
                        </div>    
                        <form className="w-75 ml-5">
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Username</label>
                                <input type="text" className="form-control" id="exampleInput" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
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