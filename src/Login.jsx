import React, { useState } from 'react';
import { useNavigate } from 'react-router'; // Correct import for React Router v6
import { useContext } from 'react'; // To access the AuthContext
import AuthContext from './AuthContext';


const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext); // Access the context and update the state
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({ email: true, password: true });
    if (Object.keys(validationErrors).length === 0) {
      // Handle login logic here
      alert('Login successful!');
      setIsAuthenticated(true); // Set isAuthenticated to true when login is successful
      navigate("/Dashboard"); // Navigate to the Dashboard page
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        noValidate
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Login to your account</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${
              errors.email && touched.email ? 'border-red-400' : 'border-gray-200'
            }`}
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={() => setTouched({ ...touched, email: true })}
            autoComplete="email"
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${
              errors.password && touched.password ? 'border-red-400' : 'border-gray-200'
            }`}
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={() => setTouched({ ...touched, password: true })}
            autoComplete="current-password"
          />
          {errors.password && touched.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
