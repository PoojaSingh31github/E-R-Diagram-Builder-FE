import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { signupUser } from "../../utils/ApiEndPoints/ApiEndPoint.js";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSignup = async (e) => {
    e.preventDefault();

    try {
      await signupUser({ username, email, password });
      navigate("/login");
      toast.success("Signup Successfull")
    } catch (error) {
      setError(error.message);
      toast.error("Signup Failed")
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="w-full max-w-md bg-[#FAC67A] p-8 shadow-lg rounded">
          <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

          {/* Email Login Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="relative ">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded text-black dark-text-white focus:outline-none focus:ring focus:border-blue-300"
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-center inset-y-0 right-3 top-1/2 flex items-center justify-center cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#7c294f] text-white rounded hover:bg-[#5d223c] transition"
            >
              Signup
            </button>
          </form>
          <div className=" text-black text-center mt-4 font-medium">
            Already have account?{" "}
            <Link to={"/login"} className="text-[#7c294f]">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;