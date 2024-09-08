import React from 'react';

function LoginPage() {
    return (
        <div className="flex h-screen bg-gray-900">
            {/* Left side */}
            <div className="w-1/2 flex flex-col items-center justify-center p-8 text-center bg-gray-800">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src="path-to-your-logo.png" // Replace with actual path to the scales of justice logo image
                        alt="Justice Scale Logo"
                        className="w-32 h-32"
                    />
                </div>
                <h1 className="text-4xl text-white font-bold">Welcome Back .!</h1>
            </div>

            {/* Right side */}
            <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-gray-900">
                <div className="w-full max-w-sm">
                    <h2 className="text-xl text-gray-100 mb-2">Glad you're back.!</h2>
                    <form className="bg-gray-800 p-6 rounded shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                className="w-full p-3 bg-gray-700 text-white rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full p-3 bg-gray-700 text-white rounded"
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe" className="text-gray-400 text-sm">
                                Remember me
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded font-semibold"
                        >
                            Login
                        </button>
                        <div className="mt-4 text-center">
                            <a href="#" className="text-gray-400 text-sm hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    </form>

                    <div className="mt-6 flex justify-center space-x-4">
                        {/* Social media icons, add actual paths to icons */}
                        <img src="path-to-google-icon.png" alt="Google" className="w-8 h-8" />
                        <img src="path-to-facebook-icon.png" alt="Facebook" className="w-8 h-8" />
                        <img src="path-to-github-icon.png" alt="Github" className="w-8 h-8" />
                    </div>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-gray-400 text-sm hover:underline">
                            Don't have an account? Signup
                        </a>
                    </div>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-gray-400 text-xs hover:underline">
                            Terms & Conditions
                        </a>
                        {' | '}
                        <a href="#" className="text-gray-400 text-xs hover:underline">
                            Support
                        </a>
                        {' | '}
                        <a href="#" className="text-gray-400 text-xs hover:underline">
                            Customer Care
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;