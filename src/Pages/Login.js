import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  
  };
  return (
    <>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover hidden sm:block absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/5edf9ecd-fc54-4876-b492-a8f970fc792d/NG-en-20220711-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />

        <div className="bg-black/50 top-0 left-0 w-full h-screen fixed"></div>

        <div className="w-full px-4 py-24 fixed z-50">
          <div className="max-w-[450px] h-[600px] bg-black/75 text-white mx-auto">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className="p-3 bg-red-400 my-2">Sorry, we can't find an account with this email address</p>: null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600 mr-2">New to Netflix?</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
