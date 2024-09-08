import React from 'react';

const SignupForm = () => {
  return (
    <div className="bg-black text-white p-10">
      <h2 className="text-3xl font-bold mb-6">Roll the Carpet!</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username / Phone"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Signup
        </button>
      </form>
      <div className="mt-6 text-gray-400">
        <p>Already Registered? <a href="/login" className="underline">Login</a></p>
        <p><a href="/terms" className="underline">Terms & Conditions</a> | <a href="/support" className="underline">Support</a> | <a href="/customer-care" className="underline">Customer Care</a></p>
      </div>
    </div>
  );
};

export default SignupForm;
