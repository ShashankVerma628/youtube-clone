import { useState, useEffect } from "react";
import { FaEyeSlash, FaEye, FaMailBulk, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../context/YoutubeContext";

const SignUp = () => {
  const { isLoggedIn } = useStateContext();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  useEffect(() => {
    if (isLoggedIn) {
      toast.success("You are logged in. Can't create another account");
      navigate("/profile");
    }
  }, [isLoggedIn]);

  const handleChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const user = await createUserWithEmailAndPassword(auth, email, password);

      console.log(user);
      toast.success("Your Account has been created!");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
    setformData({ email: "", password: "" });
  };

  return (
    <div className="container">
      <div className="page-header">
        <h2>Create an Account</h2>
      </div>
      <div className="sign-up-form-container">
        <form className="user-sign-up-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="form-label">
              Enter Your Name
            </label>
            <input
              type="text"
              value={name}
              id="name"
              onChange={handleChange}
              required
              autoComplete=""
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="form-label">
              Enter your email
            </label>
            <input
              type="email"
              onChange={handleChange}
              id="email"
              value={email}
              className="sign-up-form-input"
              autoFocus
              required
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
                required
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
          <div className="form-control">
            {/* Upload image for avatar here */}
          </div>
          <div>
            <button type="submit" className="btn btn-submit">
              Sign Up
            </button>
          </div>
        </form>
        <div>Or</div>
        <div className="alt-provider-container">
          <button className="btn google-btn">
            <FaGoogle />
          </button>
          <button className="btn email-btn">
            <FaMailBulk />
          </button>
        </div>
        <p className="sign-in-link">
          Already have an account?
          <Link to="/sign-in">Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
