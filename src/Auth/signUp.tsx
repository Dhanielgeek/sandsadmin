import React from 'react'
import house from '../../public/HouseBuilding.jpg'

const SignUp = () => {
  return (
    <section className="min-h-screen flex">
      <div className="hidden md:block  w-[50%] h-80% ">
        <img
          src={house}
          alt="house"
          className="w-full object-cover rounded-xl h-[46rem]"
        />
      </div>
      <div className="w-[100%] md:w-[50%] flex items-center justify-center bg-white p-8">
        <div className="md:w-[85%]  bg-white  px-8 md:px-5 md:py-16 py-18 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-medium md:font-bold text-gray-700 text-center">
            Create an Account
          </h2>
          <form className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="first name"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
                <input
                  type="text"
                  id="name"
                  placeholder=" Full Name"
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
    </section>
  );
}

export default SignUp
