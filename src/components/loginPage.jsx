import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    return (
        <form>
            <h3>Log in</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            {/* <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div> */}
            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={() => { navigate('/homePage'); }}>Sign in</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form >
    )
}