import React, { useState } from "react";
import { api_end_point } from "../utils/ApiEndPoint.js";

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isLogin
        ? `${api_end_point}/api/users/login`
        : `${api_end_point}/api/users/register`;

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      alert(isLogin ? "Login successful!" : "Registration successful!");
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Header Tabs */}
        <div className="flex justify-around mb-6 border-b">
          <button
            className={`w-1/2 text-center py-2 ${isLogin ? "border-b-2 border-blue-500 text-blue-500 font-bold" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            Log in
          </button>
          <button
            className={`w-1/2 text-center py-2 ${!isLogin ? "border-b-2 border-blue-500 text-blue-500 font-bold" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign up free
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full name"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Work email"
            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
          />
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              &#128065;
            </span>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
          >
            {loading ? "Processing..." : isLogin ? "Log In" : "Create account"}
          </button>
        </form>

        {/* Social Logins */}
        <div className="flex items-center justify-center my-4">
          <div className="border-t w-1/4"></div>
          <p className="text-gray-400 text-sm mx-2">or continue with</p>
          <div className="border-t w-1/4"></div>
        </div>
        <div className="flex justify-around">
          <button className="border p-3 rounded w-1/4 flex items-center justify-center">
            <img src="google-logo.png" alt="Google" className="w-5 h-5" />
          </button>
          <button className="border p-3 rounded w-1/4 flex items-center justify-center">
            <img src="microsoft-logo.png" alt="Microsoft" className="w-5 h-5" />
          </button>
          <button className="border p-3 rounded w-1/4 flex items-center justify-center">
            <img src="slack-logo.png" alt="Slack" className="w-5 h-5" />
          </button>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-center mt-6 text-xs">
          By registering, you agree to our{" "}
          <a href="#" className="text-blue-500 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
