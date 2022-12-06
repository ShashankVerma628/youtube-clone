import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaMailBulk, FaGoogle } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useStateContext } from "../context/YoutubeContext";

// Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, userDetails, setUserDetails } =
    useStateContext();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // If user is logged in redirect to profile page
  useEffect(() => {
    if (isLoggedIn) {
      toast.success("You're already logged in");
      navigate("/profile");
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredetntial = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // console.log(userCredetntial.user);
      const { uid, displayName } = userCredetntial.user;
      setIsLoggedIn(true);
      setUserDetails({ uid: uid, displayName: displayName });
      toast.success("You're logged in");
    } catch (error) {
      setIsLoggedIn(false);
      toast.error("Bad User Credentials");
      // console.log(error);
    }
    setformData({ email: "", password: "" });
  };

  return (
    <div className="container">
      <div className="page-header">
        <h2>Sign In</h2>
      </div>
      <div className="sign-in-form-container">
        <form className="user-sign-in-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email" className="form-label">
              Enter your email
            </label>
            <input
              type="email"
              onChange={handleChange}
              id="email"
              value={email}
              className="sign-in-form-input"
              autoFocus
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="form-label">
              Enter password
            </label>
            <div className="password-div">
              <input
                value={password}
                type={!showPassword ? "password" : "text"}
                onChange={handleChange}
                name="password"
                id="password"
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {!showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-submit">
              Login
            </button>
          </div>
          <Link className="forgot-password-link" to="/forgot-password">
            Forgot Password?
          </Link>
        </form>
        <div>Or</div>
        <div className="alt-provider-container">
          <button className="btn google-btn">
            <FaMailBulk />
          </button>
          <button className="btn email-btn">
            <FaGoogle />
          </button>
        </div>
        <p className="sign-up-link">
          Don't have an account?
          <Link to="/sign-up">Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
