import React from 'react'

const Login = () => {
  return (
    <div className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-700 text-center">Log In</h2>
        <form className="mt-6 space-y-4">
          <div className="mt-8 space-y-6">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
              <input
                type="email"
                id="email"
                placeholder="email Address"
                className="w-full mt-1  outline-none   border border-gray-500 rounded-lg px-1 py-4
    focus:border-gray-200 focus:ring focus:ring-transparent-70"
              />
            </label>
          </div>
          <div className="mt-8 space-y-6">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-600"
            >
              Password
              <input
                type="email"
                id="email"
                placeholder="***********"
                className="w-full mt-1  outline-none   border border-gray-500 rounded-lg px-1 py-4
    focus:border-gray-200 focus:ring focus:ring-transparent-70"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-white rounded-2xl mt-6 py-3 px-6 bg-[#101828] hover:bg-[#244585]"
          >
            Submit
          </button>
        </form>
        <p className="text-sm text-gray-600 py-3">
          Already have an account? {}
          <a href="" className="text-gray-800 font-medium">
            log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login
