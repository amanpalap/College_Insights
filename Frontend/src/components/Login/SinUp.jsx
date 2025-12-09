import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to validate email format
  const isValidEmail = (email) => {
    return emailRegex.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.password!== password.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Making a post request to your signup endpoint
      const response = await axios.post("https://localhost:8000/SignUp", {
        email,
        password: password.password
      });

      if (response.status === 201) {
        console.log("User registered successfully");
        setError(""); // Clear any existing errors
        navigate("/Login"); // Redirect to login page
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An error occurred during registration. Please try again.");
    }
  }

  return (
    <div className="flex flex-wrap justify-center w-full max-w-md p-8 mt-10 text-white bg-black rounded-lg shadow-lg gap-y-4 bg-opacity-20">
      <h2 className="flex flex-wrap justify-center w-full text-2xl font-bold text-center text-white bg-black rounded-xl bg-opacity-40">Sign-Up</h2>
      <form className='flex flex-wrap items-center justify-center w-full gap-y-4' onSubmit={handleSubmit}>
        <div className="w-full mb-4">
          <label htmlFor="email" className="block mb-2 text-white">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-transparent border-b-2 rounded-lg focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="password" className="block mb-2 text-white">Password</label>
          <input
            onChange={(e) => setPassword({...password, password: e.target.value })}
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-transparent border-b-2 rounded-lg focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="confirmPassword" className="block mb-2 text-white">Confirm Password</label>
          <input
            onChange={(e) => setPassword({...password, confirmPassword: e.target.value })}
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 bg-transparent border-b-2 rounded-lg focus:outline-none"
            placeholder="Confirm your password"
            required
          />
        </div>
        {error && <p className="w-full text-red-500">{error}</p>}
        <button type="submit" className="w-1/3 py-2 text-sm font-extrabold bg-black rounded-xl bg-opacity-30">
          Sign Up
        </button>
      </form>
      <p className='flex flex-wrap text-sm font-thin'>Already have an account? <NavLink to="/Login"><button className='px-2 font-extrabold text-red-400 hover:underline'>Login</button></NavLink></p>
    </div>
  );
}

export default SignUp;