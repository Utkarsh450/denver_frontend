import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncsignupuser } from "../store/actions/userActions";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const onSubmit = async(data) => {
    console.log("Form Data:", data);
    data.id = nanoid();
    data.cart = [];
     const res = await dispatch(asyncsignupuser(data));

  if (res.success) {
    toast.success("Registered successfully!");
    navigate("/login"); // or homepage
  } else {
    toast.error(res.message || "Signup failed");
  }
  };

  return (
    <>
     <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm bg-[#121212] text-white rounded-xl p-6 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <div className="bg-black w-4 h-4 transform rotate-45"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center">Create an account</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Let’s start your journey with us today
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Username</label>
            <div className="flex items-center bg-[#1E1E1E] px-3 py-2 rounded-md">
              <User className="text-gray-400 w-4 h-4 mr-2" />
              <input
                {...register("username", { required: "Username is required" })}
                className="bg-transparent outline-none flex-1 text-white"
                placeholder="Username"
              />
            </div>
            {errors.username && (
              <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <div className="flex items-center bg-[#1E1E1E] px-3 py-2 rounded-md">
              <Mail className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="bg-transparent outline-none flex-1 text-white"
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <div className="flex items-center bg-[#1E1E1E] px-3 py-2 rounded-md">
              <Lock className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="bg-transparent outline-none flex-1 text-white"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="text-gray-400 ml-2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 text-center mt-2">
            By creating an account, you agree with our{" "}
            <span className="underline cursor-pointer">Terms of Service</span>
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="underline cursor-pointer">Log in</Link>
          </p>
        </form>
      </div>
    </div>
      <Footer/>
    
    </>
  );
}
